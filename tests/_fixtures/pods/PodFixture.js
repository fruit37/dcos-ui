module.exports = {
  'spec': {
    'id': '/podABCD',
    'version': '2016-08-29T01:01:01.001',
    'labels': {
      'POD_LABEL': 'foo'
    },
    'containers': [
      {
        'name': 'container-1',
        'image': { 'kind': 'DOCKER', 'id': 'jdef/my-web-service-abc:v1.1.1' },
        'endpoints': [
          {
            'name': 'nginx',
            'containerPort': 8888,
            'hostPort': 0,
            'protocol': 'http',
            'labels': {
              'VIP0': '1.2.3.4:80'
            }
          }
        ],
        'resources': { 'cpus': 0.5, 'mem': 64 }
      },
      {
        'name': 'container-2',
        'image': { 'kind': 'DOCKER', 'id': 'jdef/my-web-service-abc:v1.1.1' },
        'endpoints': [
          {
            'name': 'nginx',
            'containerPort': 8888,
            'hostPort': 0,
            'protocol': 'http',
            'labels': {
              'VIP0': '1.2.3.4:80'
            }
          }
        ],
        'resources': { 'cpus': 0.5, 'mem': 64 }
      }
    ],
    'scaling': {
      'fixed': {
        'instances': 10
      }
    },
    'scheduling': {
      'placement': {
        'constraints': [
          { 'fieldName': 'hostname', 'operator': 'UNIQUE' }
        ],
        'acceptedResourceRoles': ['slave_public']
      }
    }
  },
  'status': 'stable',
  'statusSince': '2016-08-31T01:01:01.001',
  'message': 'All pod instances are running and in good health',
  'lastUpdated': '2016-08-31T01:01:01.001',
  'lastChanged': '2016-08-31T01:01:01.001',
  'instances': [
    {
      'id': 'instance-1',
      'status': 'stable',
      'statusSince': '2016-08-31T01:01:01.001',
      'agentHostname': 'agent-1',
      'resources': { 'cpus': 1.0, 'mem': 128 },
      'lastUpdated': '2016-08-31T01:01:01.001',
      'lastChanged': '2016-08-31T01:01:01.001',
      'containers': [
        {
          'name': 'container-1',
          'status': 'TASK_RUNNING',
          'statusSince': '2016-08-31T01:01:01.001',
          'containerId': 'container-id-1',
          'endpoints': [
            { 'name': 'nginx', 'allocatedHostPort': 31001 }
          ],
          'lastUpdated': '2016-08-31T01:01:01.001',
          'lastChanged': '2016-08-31T01:01:01.001'
        },
        {
          'name': 'container-2',
          'status': 'TASK_RUNNING',
          'statusSince': '2016-08-31T01:01:01.001',
          'containerId': 'container-id-2',
          'endpoints': [
            { 'name': 'nginx', 'allocatedHostPort': 31002 }
          ],
          'lastUpdated': '2016-08-31T01:01:01.001',
          'lastChanged': '2016-08-31T01:01:01.001'
        }
      ]
    },
    {
      'id': 'instance-2',
      'status': 'stable',
      'statusSince': '2016-08-31T01:01:01.001',
      'agentHostname': 'agent-2',
      'resources': { 'cpus': 1.0, 'mem': 128 },
      'lastUpdated': '2016-08-31T01:01:01.001',
      'lastChanged': '2016-08-31T01:01:01.001',
      'containers': [
        {
          'name': 'container-1',
          'status': 'TASK_RUNNING',
          'statusSince': '2016-08-31T01:01:01.001',
          'containerId': 'container-id-3',
          'endpoints': [
            { 'name': 'nginx', 'allocatedHostPort': 31011 }
          ],
          'lastUpdated': '2016-08-31T01:01:01.001',
          'lastChanged': '2016-08-31T01:01:01.001'
        },
        {
          'name': 'container-2',
          'status': 'TASK_RUNNING',
          'statusSince': '2016-08-31T01:01:01.001',
          'containerId': 'container-id-4',
          'endpoints': [
            { 'name': 'nginx', 'allocatedHostPort': 31012 }
          ],
          'lastUpdated': '2016-08-31T01:01:01.001',
          'lastChanged': '2016-08-31T01:01:01.001'
        }
      ]
    },
    {
      'id': 'instance-3',
      'status': 'staging',
      'statusSince': '2016-08-31T01:01:01.001',
      'agentHostname': 'agent-3',
      'resources': { 'cpus': 1.0, 'mem': 128 },
      'lastUpdated': '2016-08-31T01:01:01.001',
      'lastChanged': '2016-08-31T01:01:01.001',
      'containers': [
        {
          'name': 'container-1',
          'status': 'TASK_STAGING',
          'statusSince': '2016-08-31T01:01:01.001',
          'containerId': 'container-id-5',
          'endpoints': [
            { 'name': 'nginx', 'allocatedHostPort': 31021 }
          ],
          'lastUpdated': '2016-08-31T01:01:01.001',
          'lastChanged': '2016-08-31T01:01:01.001'
        },
        {
          'name': 'container-2',
          'status': 'TASK_STAGING',
          'statusSince': '2016-08-31T01:01:01.001',
          'containerId': 'container-id-6',
          'endpoints': [
            { 'name': 'nginx', 'allocatedHostPort': 31022 }
          ],
          'lastUpdated': '2016-08-31T01:01:01.001',
          'lastChanged': '2016-08-31T01:01:01.001'
        }
      ]
    }
  ]
};
