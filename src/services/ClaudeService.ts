import axios, { AxiosInstance } from 'axios';

import AIProvider from '@/interfaces/AIProvider';
import { AnalysisRequest } from '@/types/analysis';
import Config from '@/types/config';

class ClaudeService implements AIProvider {
  private config: Config['models']['claude'];
  private client: AxiosInstance;

  public constructor(config: Config['models']['claude']) {
    this.config = config;

    this.client = axios.create({
      baseURL: this.config.baseUrl,
      timeout: this.config.timeout,
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': this.config.xApiKey,
        'anthropic-version': this.config.anthropicVersion,
      },
    });
  }

  async analyzeProfile(request: AnalysisRequest): Promise<string> {
    try {
      const payload = {
        model: this.config.model,
        max_tokens: this.config.maxTokens,
        temperature: this.config.temperature,
        messages: [
          {
            role: 'user',
            content: `Analiza este perfil de desarrollador y dame un resumen detallado:

  Datos del perfil: ${JSON.stringify(request.profiles, null, 2)}
  Objetivo: ${JSON.stringify(request.target, null, 2)}

  Proporciona un análisis técnico completo con fortalezas, debilidades y recomendaciones.`,
          },
        ],
      };

      const response = await this.client.post('/messages', payload);
      return response.data;
    } catch (error) {
      console.log(`Claude analysis failed`, error);
      throw error;
    }
  }

  async isHealthy(): Promise<boolean> {
    try {
      const response = await this.client.post('/messages', {
        model: this.config.model,
        max_tokens: 10,
        messages: [{ role: 'user', content: 'Hi' }],
      });

      return response.status === 200;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

export default ClaudeService;
