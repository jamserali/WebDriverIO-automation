import { GetSecretValueCommand, SecretsManagerClient } from '@aws-sdk/client-secrets-manager';

export class AwsSecretManager {
  client: SecretsManagerClient;

  private secret_name = 'integration/qaautomation';

  constructor(accessKey: string, secretKey: string) {
    this.client = new SecretsManagerClient({
      credentials: {
        accessKeyId: accessKey,
        secretAccessKey: secretKey,
      },
      region: 'ap-southeast-1',
    });
  }

  public async fetchSecrets() {
    const filter = new GetSecretValueCommand({
      SecretId: this.secret_name,
    });

    const result = await this.client.send(filter);

    return JSON.parse(result.SecretString);
  }
}
