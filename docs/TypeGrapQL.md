## Notes

### Resolvers

Link:
https://typegraphql.ml/docs/resolvers.html

#### Field Resolvers

Link:
https://typegraphql.ml/docs/resolvers.html#field-resolvers

Mixins:
In order to do mixins (Class extenions, but more than one class at once). Please see ExampleMixin.ts in the "shared" module. Also from Ben Awad's `Logout TypeGraphQL` video @ 9:00 elapsed.

Video:
https://www.youtube.com/watch?v=j9dOdjBzARo&list=PLN3n1USn4xlma1bBu3Tloe4NyYn9Ko8Gs&index=8

Playlist: TypeGraphQL -

Notes:
In general it's smart to keep simple field resolver in our Entity but more complex logic (like api calls, db fetches, anything async, etc.)
FieldReslvers should probably be kept in the Resolver itself.
