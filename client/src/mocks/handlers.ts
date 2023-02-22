import { rest } from 'msw'

export default [
  rest.get('api/checklist/c9ab2375-a2af-4b39-805f-668f20bb12e6', (req, rsp, ctx) => {
    return rsp(
      ctx.json({
        id: 'c9ab2375-a2af-4b39-805f-668f20bb12e6',
        title: 'Fake Checklist',
        items: [
          {
            id: '4e9014f2-8e6f-49d5-9c0d-9754159214f3',
            title: 'item-1',
            checked: false,
            expand: true,
            subItems: [
              {
                id: 'fdd4590c-3a3d-4c1b-b3a6-e8691a6df900',
                title: 'item-1-1',
                checked: false,
                expand: true,
                subItems: []
              }
              , {
                id: 'f1180302-2d18-47b6-bc46-549077c738b0',
                title: 'item-1-2',
                checked: false,
                expand: true,
                subItems: []
              }
            ]
          }, {
            id: 'a77b6fa6-d572-4d1f-9363-62bbb571baaf',
            title: 'item-1',
            checked: false,
            expand: false,
            subItems: []
          }
        ]
      })
    )
  })
]
