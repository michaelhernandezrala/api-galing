import { v4 as uuidv4 } from 'uuid';

import { Application, ApplicationCreateRequest, ApplicationUpdateRequest } from '@/types/applications.types';

class ApplicationService {
  public constructor() {}

  public async create(_data: ApplicationCreateRequest): Promise<Application> {
    const now = new Date().toISOString();

    return {
      id: uuidv4(),
      name: 'test',
      plan: 'free',
      enabled: true,
      createdAt: now,
      updatedAt: now,
    };
  }

  public async getById(_id: string | undefined): Promise<Application> {
    const now = new Date().toISOString();

    return {
      id: uuidv4(),
      name: 'test',
      plan: 'free',
      enabled: true,
      createdAt: now,
      updatedAt: now,
    };
  }

  public async update(_id: string | undefined, _data: ApplicationUpdateRequest): Promise<Application> {
    const now = new Date().toISOString();

    return {
      id: uuidv4(),
      name: 'test',
      plan: 'free',
      enabled: true,
      createdAt: now,
      updatedAt: now,
    };
  }

  public async destroy(_id: string | undefined): Promise<boolean> {
    return true;
  }
}

export default ApplicationService;
