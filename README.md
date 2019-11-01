# Typegoose-base-id

## Steps

- Start a mongodb instance

- yarn start:dev

- go to http://localhost:3000/graphql and try the following mutation

```graphql
mutation {
  createUser(input: { firstName: "typegoose", lastName: "typegoose" }) {
    id
  }
}
```

- you will get the following error

```json
{
  "errors": [
    {
      "message": "Cannot return null for non-nullable field User.id.",
      "locations": [
        {
          "line": 3,
          "column": 5
        }
      ],
      "path": ["createUser", "id"]
    }
  ]
}
```

is caused because virtual method relayId always get undefined on `this._id`
