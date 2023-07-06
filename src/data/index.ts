

export type UserData = Awaited<ReturnType<typeof getData>>
export default async function getData(){
  return {
    "summary" :{
      "revenue":1258947,
      "transactions":2200,
      "likes":8923,
      "users":1109
    },
    "activities":[
      {
        "month":1,
        "data":[
          {
            "week":"Week 1",
            "user":200,
            "guest":300
          },
          {
            "week":"Week 2",
            "user":100,
            "guest":250
          },
          {
            "week":"Week 3",
            "user":175,
            "guest":100
          },
          {
            "week":"Week 4",
            "user":250,
            "guest":180
          }
        ]
        
      },
      {
        "month":2,
        "data":[
          {
            "week":"Week 1",
            "user":300,
            "guest":200
          },
          {
            "week":"Week 2",
            "user":350,
            "guest":100
          },
          {
            "week":"Week 3",
            "user":400,
            "guest":250
          },
          {
            "week":"Week 4",
            "user":320,
            "guest":270
          }
        ]
        
      },
     {
        "month":3,
        "data":[
          {
            "week":"Week 1",
            "user":240,
            "guest":270
          },
          {
            "week":"Week 2",
            "user":200,
            "guest":320
          },
          {
            "week":"Week 3",
            "user":250,
            "guest":380
          },
          {
            "week":"Week 4",
            "user":300,
            "guest":185
          }
        ]
        
      },
      {
        "month":4,
        "data":[
          {
            "week":"Week 1",
            "user":400,
            "guest":280
          },
          {
            "week":"Week 2",
            "user":450,
            "guest":210
          },
          {
            "week":"Week 3",
            "user":350,
            "guest":160
          },
          {
            "week":"Week 4",
            "user":375,
            "guest":120
          }
        ]
        
      }
    ],
    "products":[
      {
        "month": 1,
        "items":[
          {
            "name":"Tees",
            "percentage":45
          },
          {
            "name":"Jeans",
            "percentage":30
          },
          {
            "name":"Hoodies",
            "percentage":25
          }
        ]
      },
       {
        "month": 2,
        "items":[
          {
            "name":"Tees",
            "percentage":48
          },
          {
            "name":"Jeans",
            "percentage":28
          },
          {
            "name":"Hoodies",
            "percentage":24
          }
        ]
      },
       {
        "month": 3,
        "items":[
          {
            "name":"Tees",
            "percentage":46
          },
          {
            "name":"Jeans",
            "percentage":34
          },
          {
            "name":"Hoodies",
            "percentage":20
          }
        ]
      },
       {
        "month": 4,
        "items":[
          {
            "name":"Tees",
            "percentage":49
          },
          {
            "name":"Jeans",
            "percentage":27
          },
          {
            "name":"Hoodies",
            "percentage":24
          }
        ]
      }
    ],
    "schedule":[
      {
        "title":"Meeting with Suppliers",
        "from":"9:00",
        "to":"10:30",
        "location":"Conference Room, Stores"
      },
      {
        "title":"Presentation to Investors",
        "from":"12:30",
        "to":"13:30",
        "location":"Auditorium"
      },
      {
        "title":"Team Discussion",
        "from":"18:00",
        "to":"19:00",
        "location":"Meeting Room"
      }
    ]
  }
}