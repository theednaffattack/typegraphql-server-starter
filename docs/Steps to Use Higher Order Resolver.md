# Steps to Use / Create a Higher Order Resolver

1 - Create a TypeORM entity

2 - Create a new Base Resolver using the `createBaseResolver` function.

```


const BaseCreateProductResolver = createBaseResolver(
  "Product",
  Product,
  ProductInput,
  Product
);

```

3 - Create a new resolver using Type Graphql by extending the new Base Resolver
New resolver functions to add onto the extension would be added here.

```

@Resolver()
export class CreateProductResolver extends BaseCreateProductResolver {
  //   @Mutation(() => User)
  //   async createUser(@Arg("data") data: RegisterInput) {
  //     // @todo: add hashing of password
  //     return User.create(data).save();
  //   }
}
```
