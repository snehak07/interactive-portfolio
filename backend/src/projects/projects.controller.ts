import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common';

@Controller('projects')
export class ProjectsController {@Get()
  findAll() {
    return [
      {
        id: 1,
        title: 'Schedula',
        description:
          'Scheduling platform built during internship to manage appointments.',
        tech: ['NestJS', 'PostgreSQL'],
      },
      {
        id: 2,
        title: '1851 Franchise Platform',
        description:
          'Backend services for franchise management using scalable APIs.',
        tech: ['NestJS', 'MySQL'],
      },
    ];
  }
}
