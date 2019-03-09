export default [
  {
    key: 0,
    name: "Bob",
    text: "Perfect!",
    rating: 5,
    verified: true,
    replies: [
      {
        key: 0,
        name: "Alice",
        text: "Agree",
        verified: false
      },
      {
        key: 1,
        name: "admin",
        text: "Thank you!",
        verified: true,
        replies: [
          {
            key: 0,
            name: "Bob",
            text: "Write more!",
            verified: true,
            replies: [
              {
                key: 0,
                name: "admin",
                text: "Ok :)",
                verified: true
              }
            ]
          }
        ]
      },
      {
        key: 2,
        name: "Augusta",
        text: "like a brillaint!11",
        verified: true
      }
    ]
  },
  {
    key: 1,
    name: "mr.John",
    text: "Well done..",
    rating: 4,
    verified: false,
    replies: [
      {
        key: 0,
        name: "admin",
        text: "Can it be better?",
        verified: true,
        replies: [
          {
            key: 0,
            name: "mr.John",
            text: "May be last three lines can be shorter..",
            verified: false,
            replies: [
              {
                key: 0,
                name: "Bob",
                verified: true,
                text: "Don't listen to him, it will be unreadable!"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    key: 2,
    name: "Mark",
    rating: 5,
    text: "Any way to donate?",
    verified: false,
    replies: [
      {
        key: 0,
        name: "Bill",
        text: "+1",
        verified: false
      },
      {
        key: 1,
        name: "Larry",
        text: "+1",
        verified: true
      }
    ]
  },
  {
    key: 3,
    name: "Regina",
    rating: 2,
    text: "Not really like it",
    verified: true,
    replies: [
      {
        key: 0,
        name: "admin",
        text: ":(",
        verified: true
      }
    ]
  }
];
