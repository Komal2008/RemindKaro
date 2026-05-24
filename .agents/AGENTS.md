# Agent Team Configuration

## Providers

- Provider: amazon-bedrock
  Credentials:
  aws_access_key_id: ENV[AWS_ACCESS_KEY_ID]
  aws_secret_access_key: ENV[AWS_SECRET_ACCESS_KEY]
  region: ap-south-1

## Model Assignments

- Role: Lead Architect / Planner
  Model: anthropic.claude-opus-4-7
  Provider: amazon-bedrock

- Role: Subagent / Code Implementer
  Model: anthropic.claude-sonnet-4-6
  Provider: amazon-bedrock
