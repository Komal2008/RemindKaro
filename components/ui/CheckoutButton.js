'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import styles from './CheckoutButton.module.css';

// Loads the Razorpay checkout.js script once and returns the Razorpay constructor
function loadRazorpayScript() {
  return new Promise((resolve) => {
    if (window.Razorpay) return resolve(true);
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export default function CheckoutButton({ planId, children, className }) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // null | 'success' | 'error'
  const router = useRouter();

  const handlePay = useCallback(async () => {
    setLoading(true);
    setStatus(null);

    try {
      // 1. Load Razorpay SDK
      const loaded = await loadRazorpayScript();
      if (!loaded) {
        alert('Failed to load Razorpay SDK. Check your internet connection.');
        return;
      }

      // 2. Create order on server
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ planId }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        alert('Order creation failed: ' + (data.error || 'Unknown error'));
        return;
      }

      // 3. Open Razorpay modal
      const options = {
        key: data.keyId,
        amount: data.amount,
        currency: data.currency,
        name: 'RemindKaro',
        description: data.description,
        order_id: data.orderId,
        theme: { color: '#5e6ad2' },
        prefill: {
          // These are optional — will be pre-filled if user data is available
          // name: 'User Name',
          // email: 'user@example.com',
        },
        handler: async function (response) {
          // 4. Verify payment on server
          const verifyRes = await fetch('/api/checkout/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              planId,
            }),
          });

          const verifyData = await verifyRes.json();

          if (verifyData.success) {
            setStatus('success');
            router.push('/dashboard?upgraded=true');
          } else {
            setStatus('error');
            alert(
              'Payment verification failed. Please contact support with payment ID: ' +
                response.razorpay_payment_id
            );
          }
        },
        modal: {
          ondismiss: () => {
            setLoading(false);
          },
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', function (response) {
        setStatus('error');
        setLoading(false);
        alert(
          'Payment failed: ' + (response.error?.description || 'Unknown error')
        );
      });
      rzp.open();
    } catch (err) {
      console.error('Checkout error:', err);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [planId, router]);

  return (
    <button
      onClick={handlePay}
      disabled={loading || status === 'success'}
      className={`${styles.btn} ${className || ''}`}
    >
      {status === 'success'
        ? '✓ Activated!'
        : loading
          ? 'Opening…'
          : children || 'Pay with Razorpay'}
    </button>
  );
}
