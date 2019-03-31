## Notes

### Resolvers

Link:
https://typegraphql.ml/docs/resolvers.html

#### Field Resolvers

Link:
https://typegraphql.ml/docs/resolvers.html#field-resolvers

Notes:
In general it's smart to keep simple field resolver in our Entity but more complex logic (like api calls, db fetches, anything async, etc.)
FieldReslvers should probably be kept in the Resolver itself.
