import {FieldsSelection,Observable} from '@genql/runtime'

export type Scalars = {
    Boolean: boolean,
    ID: string,
    Int: number,
    String: string,
}

export interface CreatedCustomer {
    customer: Customer
    token: Scalars['String']
    __typename: 'CreatedCustomer'
}

export interface CreatedCustomerAddress {
    customer: CustomerAddress
    token: Scalars['String']
    __typename: 'CreatedCustomerAddress'
}

export interface CreatedProduct {
    products: Product
    token: Scalars['String']
    __typename: 'CreatedProduct'
}

export interface CreatedTokenCustomer {
    token: Scalars['String']
    __typename: 'CreatedTokenCustomer'
}

export interface CreatedWishlist {
    count?: Scalars['Int']
    items: Wish[]
    token: Scalars['String']
    __typename: 'CreatedWishlist'
}

export interface Customer {
    address: CustomerAddress[]
    avatarImage?: Scalars['String']
    cpf: Scalars['String']
    dateOfBirth: Scalars['String']
    email: Scalars['String']
    firstname: Scalars['String']
    gender: Scalars['Int']
    id: Scalars['ID']
    lastname: Scalars['String']
    password: Scalars['String']
    subscribe: Scalars['Boolean']
    telephone: Scalars['String']
    tokens?: CustomerTokens
    wishlist?: CustomerWishlist
    __typename: 'Customer'
}

export interface CustomerAddress {
    CEP: Scalars['String']
    bairro: Scalars['String']
    cidade: Scalars['String']
    defaultBilling: Scalars['Boolean']
    defaultShipping: Scalars['Boolean']
    email: Scalars['String']
    estado: Scalars['String']
    id?: Scalars['ID']
    pais: Scalars['String']
    rua: Scalars['String']
    userId: Scalars['ID']
    __typename: 'CustomerAddress'
}

export interface CustomerSubscribed {
    subscribed: Scalars['Boolean']
    __typename: 'CustomerSubscribed'
}

export interface CustomerTokens {
    items: Scalars['String'][]
    __typename: 'CustomerTokens'
}

export interface CustomerUnsubscribed {
    unsubscribed: Scalars['Boolean']
    __typename: 'CustomerUnsubscribed'
}

export interface CustomerWishlist {
    count?: Scalars['Int']
    items: Wish[]
    userId?: Scalars['String']
    __typename: 'CustomerWishlist'
}

export interface DeletedCustomer {
    delete: Scalars['Boolean']
    __typename: 'DeletedCustomer'
}

export interface PriceRange {
    maxPrice?: PriceValue
    minPrice?: PriceValue
    __typename: 'PriceRange'
}

export interface PriceValue {
    currency: Scalars['String']
    value: Scalars['Int']
    __typename: 'PriceValue'
}

export interface Product {
    description: Scalars['String']
    name: Scalars['String']
    priceRange: PriceRange
    sku: Scalars['String']
    __typename: 'Product'
}

export interface ProductWishlist {
    description: Scalars['String']
    name: Scalars['String']
    __typename: 'ProductWishlist'
}

export interface RemovedWishlist {
    items: Wish[]
    token: Scalars['String']
    __typename: 'RemovedWishlist'
}

export interface RequestedEmail {
    requested: Scalars['Boolean']
    __typename: 'RequestedEmail'
}

export interface ResetedEmail {
    newEmail: Scalars['Boolean']
    __typename: 'ResetedEmail'
}

export interface ResetedPassword {
    newPassword: Scalars['Boolean']
    __typename: 'ResetedPassword'
}

export interface SignOutCustomer {
    signOut: Scalars['Boolean']
    __typename: 'SignOutCustomer'
}

export interface UpdatedAvatar {
    token: Scalars['String']
    updated: Scalars['Boolean']
    __typename: 'UpdatedAvatar'
}

export interface UploadedAvatar {
    token: Scalars['String']
    uploaded: Scalars['Boolean']
    __typename: 'UploadedAvatar'
}

export interface Wish {
    error?: Scalars['String']
    product?: ProductWishlist
    quantity: Scalars['Int']
    sku: Scalars['String']
    __typename: 'Wish'
}

export interface Wishlist {
    count: Scalars['String']
    items: Wish[]
    token: Scalars['String']
    __typename: 'Wishlist'
}


/** mutation root */
export interface mutation_root {
    addProductsToWishlist: CreatedWishlist
    createCustomer: CreatedCustomer
    createCustomerAddress: CreatedCustomerAddress
    createProduct: CreatedProduct
    deleteCustomer: DeletedCustomer
    deleteCustomerAddress: DeletedCustomer
    removeProductsToWishlist: RemovedWishlist
    requestResetEmail: RequestedEmail
    requestResetPwd: RequestedEmail
    resetEmail: ResetedEmail
    resetPassword: ResetedPassword
    /** GoShirts_SendEmail */
    sendChangeMail: RequestedEmail
    /** GoShirts_SendEmail */
    sendEmailWelcomeNewsletter: CustomerSubscribed
    /** GoShirts_SendEmail */
    sendMailForgotPwd: RequestedEmail
    signInCustomer: CreatedTokenCustomer
    signOutCustomer: SignOutCustomer
    subscribeNewsletter: CustomerSubscribed
    unsubscribeNewsletter: CustomerUnsubscribed
    updateAvatarImage: UpdatedAvatar
    updateCustomer: CreatedCustomer
    updateCustomerAddress: CreatedCustomerAddress
    /** GoShirts_UploadFile */
    uploadAvatarImage: UploadedAvatar
    __typename: 'mutation_root'
}

export interface query_root {
    customerInfo: CreatedCustomer
    customerList: Customer[]
    customerWishList: CustomerWishlist[]
    productList: Product[]
    wishlist: Wishlist
    __typename: 'query_root'
}

export type Query = query_root
export type Mutation = mutation_root

export interface CreatedCustomerRequest{
    customer?: CustomerRequest
    token?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CreatedCustomerAddressRequest{
    customer?: CustomerAddressRequest
    token?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CreatedProductRequest{
    products?: ProductRequest
    token?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CreatedTokenCustomerRequest{
    token?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CreatedWishlistRequest{
    count?: boolean | number
    items?: WishRequest
    token?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CustomerRequest{
    address?: CustomerAddressRequest
    avatarImage?: boolean | number
    cpf?: boolean | number
    dateOfBirth?: boolean | number
    email?: boolean | number
    firstname?: boolean | number
    gender?: boolean | number
    id?: boolean | number
    lastname?: boolean | number
    password?: boolean | number
    subscribe?: boolean | number
    telephone?: boolean | number
    tokens?: CustomerTokensRequest
    wishlist?: CustomerWishlistRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CustomerAddressRequest{
    CEP?: boolean | number
    bairro?: boolean | number
    cidade?: boolean | number
    defaultBilling?: boolean | number
    defaultShipping?: boolean | number
    email?: boolean | number
    estado?: boolean | number
    id?: boolean | number
    pais?: boolean | number
    rua?: boolean | number
    userId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CustomerAddressInput {CEP: Scalars['String'],bairro: Scalars['String'],cidade: Scalars['String'],defaultBilling: Scalars['Boolean'],defaultShipping: Scalars['Boolean'],estado: Scalars['String'],pais: Scalars['String'],rua: Scalars['String']}

export interface CustomerAddressUpdateInput {CEP?: (Scalars['String'] | null),bairro?: (Scalars['String'] | null),cidade?: (Scalars['String'] | null),defaultBilling?: (Scalars['Boolean'] | null),defaultShipping?: (Scalars['Boolean'] | null),estado?: (Scalars['String'] | null),pais?: (Scalars['String'] | null),rua?: (Scalars['String'] | null)}

export interface CustomerInput {avatarImage?: (Scalars['String'] | null),cpf: Scalars['String'],dateOfBirth: Scalars['String'],email: Scalars['String'],firstname: Scalars['String'],gender: Scalars['Int'],lastname: Scalars['String'],password: Scalars['String'],subscribe?: (Scalars['Boolean'] | null),telephone: Scalars['String']}

export interface CustomerSignInInput {email: Scalars['String'],password: Scalars['String']}

export interface CustomerSubscribedRequest{
    subscribed?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CustomerTokensRequest{
    items?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CustomerUnsubscribedRequest{
    unsubscribed?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CustomerUpdateInput {cpf?: (Scalars['String'] | null),date_of_birth?: (Scalars['String'] | null),email?: (Scalars['String'] | null),firstname?: (Scalars['String'] | null),gender?: (Scalars['Int'] | null),lastname?: (Scalars['String'] | null),password?: (Scalars['String'] | null),subscribe?: (Scalars['Boolean'] | null),telephone?: (Scalars['String'] | null)}

export interface CustomerWishlistRequest{
    count?: boolean | number
    items?: WishRequest
    userId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CustomerWishlistInput {quantity: Scalars['Int'],sku: Scalars['String']}

export interface DeletedCustomerRequest{
    delete?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PriceRangeRequest{
    maxPrice?: PriceValueRequest
    minPrice?: PriceValueRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PriceValueRequest{
    currency?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ProductRequest{
    description?: boolean | number
    name?: boolean | number
    priceRange?: PriceRangeRequest
    sku?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ProductInput {currency: Scalars['String'],description: Scalars['String'],maxPrice: Scalars['Int'],minPrice: Scalars['Int'],name: Scalars['String'],sku: Scalars['String']}

export interface ProductWishlistRequest{
    description?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RemovedWishlistRequest{
    items?: WishRequest
    token?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RequestedEmailRequest{
    requested?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ResetEmailInput {newEmail: Scalars['String'],userId: Scalars['String']}

export interface ResetPwdInput {newPassword: Scalars['String'],userId: Scalars['String']}

export interface ResetedEmailRequest{
    newEmail?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ResetedPasswordRequest{
    newPassword?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SendEmailInput {email: Scalars['String'],firstname: Scalars['String']}

export interface SignOutCustomerRequest{
    signOut?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UpdatedAvatarRequest{
    token?: boolean | number
    updated?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UploadedAvatarRequest{
    token?: boolean | number
    uploaded?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WishRequest{
    error?: boolean | number
    product?: ProductWishlistRequest
    quantity?: boolean | number
    sku?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WishlistRequest{
    count?: boolean | number
    items?: WishRequest
    token?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** mutation root */
export interface mutation_rootRequest{
    addProductsToWishlist?: [{data: CustomerWishlistInput[]},CreatedWishlistRequest]
    createCustomer?: [{data: CustomerInput},CreatedCustomerRequest]
    createCustomerAddress?: [{data: CustomerAddressInput},CreatedCustomerAddressRequest]
    createProduct?: [{data: ProductInput},CreatedProductRequest]
    deleteCustomer?: [{email: Scalars['String']},DeletedCustomerRequest]
    deleteCustomerAddress?: [{ID: Scalars['ID']},DeletedCustomerRequest]
    removeProductsToWishlist?: [{data: CustomerWishlistInput[]},RemovedWishlistRequest]
    requestResetEmail?: [{email: Scalars['String']},RequestedEmailRequest]
    requestResetPwd?: [{email: Scalars['String']},RequestedEmailRequest]
    resetEmail?: [{data: ResetEmailInput},ResetedEmailRequest]
    resetPassword?: [{data: ResetPwdInput},ResetedPasswordRequest]
    /** GoShirts_SendEmail */
    sendChangeMail?: [{data: SendEmailInput},RequestedEmailRequest]
    /** GoShirts_SendEmail */
    sendEmailWelcomeNewsletter?: [{email: Scalars['String']},CustomerSubscribedRequest]
    /** GoShirts_SendEmail */
    sendMailForgotPwd?: [{data: SendEmailInput},RequestedEmailRequest]
    signInCustomer?: [{data: CustomerSignInInput},CreatedTokenCustomerRequest]
    signOutCustomer?: SignOutCustomerRequest
    subscribeNewsletter?: [{email: Scalars['String']},CustomerSubscribedRequest]
    unsubscribeNewsletter?: [{email: Scalars['String']},CustomerUnsubscribedRequest]
    updateAvatarImage?: [{file: Scalars['String']},UpdatedAvatarRequest]
    updateCustomer?: [{data: CustomerUpdateInput},CreatedCustomerRequest]
    updateCustomerAddress?: [{data: CustomerAddressUpdateInput},CreatedCustomerAddressRequest]
    /** GoShirts_UploadFile */
    uploadAvatarImage?: [{file: Scalars['String']},UploadedAvatarRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface query_rootRequest{
    customerInfo?: CreatedCustomerRequest
    customerList?: CustomerRequest
    customerWishList?: CustomerWishlistRequest
    productList?: ProductRequest
    wishlist?: WishlistRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export type QueryRequest = query_rootRequest
export type MutationRequest = mutation_rootRequest


const CreatedCustomer_possibleTypes: string[] = ['CreatedCustomer']
export const isCreatedCustomer = (obj?: { __typename?: any } | null): obj is CreatedCustomer => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isCreatedCustomer"')
  return CreatedCustomer_possibleTypes.includes(obj.__typename)
}



const CreatedCustomerAddress_possibleTypes: string[] = ['CreatedCustomerAddress']
export const isCreatedCustomerAddress = (obj?: { __typename?: any } | null): obj is CreatedCustomerAddress => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isCreatedCustomerAddress"')
  return CreatedCustomerAddress_possibleTypes.includes(obj.__typename)
}



const CreatedProduct_possibleTypes: string[] = ['CreatedProduct']
export const isCreatedProduct = (obj?: { __typename?: any } | null): obj is CreatedProduct => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isCreatedProduct"')
  return CreatedProduct_possibleTypes.includes(obj.__typename)
}



const CreatedTokenCustomer_possibleTypes: string[] = ['CreatedTokenCustomer']
export const isCreatedTokenCustomer = (obj?: { __typename?: any } | null): obj is CreatedTokenCustomer => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isCreatedTokenCustomer"')
  return CreatedTokenCustomer_possibleTypes.includes(obj.__typename)
}



const CreatedWishlist_possibleTypes: string[] = ['CreatedWishlist']
export const isCreatedWishlist = (obj?: { __typename?: any } | null): obj is CreatedWishlist => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isCreatedWishlist"')
  return CreatedWishlist_possibleTypes.includes(obj.__typename)
}



const Customer_possibleTypes: string[] = ['Customer']
export const isCustomer = (obj?: { __typename?: any } | null): obj is Customer => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isCustomer"')
  return Customer_possibleTypes.includes(obj.__typename)
}



const CustomerAddress_possibleTypes: string[] = ['CustomerAddress']
export const isCustomerAddress = (obj?: { __typename?: any } | null): obj is CustomerAddress => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isCustomerAddress"')
  return CustomerAddress_possibleTypes.includes(obj.__typename)
}



const CustomerSubscribed_possibleTypes: string[] = ['CustomerSubscribed']
export const isCustomerSubscribed = (obj?: { __typename?: any } | null): obj is CustomerSubscribed => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isCustomerSubscribed"')
  return CustomerSubscribed_possibleTypes.includes(obj.__typename)
}



const CustomerTokens_possibleTypes: string[] = ['CustomerTokens']
export const isCustomerTokens = (obj?: { __typename?: any } | null): obj is CustomerTokens => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isCustomerTokens"')
  return CustomerTokens_possibleTypes.includes(obj.__typename)
}



const CustomerUnsubscribed_possibleTypes: string[] = ['CustomerUnsubscribed']
export const isCustomerUnsubscribed = (obj?: { __typename?: any } | null): obj is CustomerUnsubscribed => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isCustomerUnsubscribed"')
  return CustomerUnsubscribed_possibleTypes.includes(obj.__typename)
}



const CustomerWishlist_possibleTypes: string[] = ['CustomerWishlist']
export const isCustomerWishlist = (obj?: { __typename?: any } | null): obj is CustomerWishlist => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isCustomerWishlist"')
  return CustomerWishlist_possibleTypes.includes(obj.__typename)
}



const DeletedCustomer_possibleTypes: string[] = ['DeletedCustomer']
export const isDeletedCustomer = (obj?: { __typename?: any } | null): obj is DeletedCustomer => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isDeletedCustomer"')
  return DeletedCustomer_possibleTypes.includes(obj.__typename)
}



const PriceRange_possibleTypes: string[] = ['PriceRange']
export const isPriceRange = (obj?: { __typename?: any } | null): obj is PriceRange => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isPriceRange"')
  return PriceRange_possibleTypes.includes(obj.__typename)
}



const PriceValue_possibleTypes: string[] = ['PriceValue']
export const isPriceValue = (obj?: { __typename?: any } | null): obj is PriceValue => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isPriceValue"')
  return PriceValue_possibleTypes.includes(obj.__typename)
}



const Product_possibleTypes: string[] = ['Product']
export const isProduct = (obj?: { __typename?: any } | null): obj is Product => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isProduct"')
  return Product_possibleTypes.includes(obj.__typename)
}



const ProductWishlist_possibleTypes: string[] = ['ProductWishlist']
export const isProductWishlist = (obj?: { __typename?: any } | null): obj is ProductWishlist => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isProductWishlist"')
  return ProductWishlist_possibleTypes.includes(obj.__typename)
}



const RemovedWishlist_possibleTypes: string[] = ['RemovedWishlist']
export const isRemovedWishlist = (obj?: { __typename?: any } | null): obj is RemovedWishlist => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isRemovedWishlist"')
  return RemovedWishlist_possibleTypes.includes(obj.__typename)
}



const RequestedEmail_possibleTypes: string[] = ['RequestedEmail']
export const isRequestedEmail = (obj?: { __typename?: any } | null): obj is RequestedEmail => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isRequestedEmail"')
  return RequestedEmail_possibleTypes.includes(obj.__typename)
}



const ResetedEmail_possibleTypes: string[] = ['ResetedEmail']
export const isResetedEmail = (obj?: { __typename?: any } | null): obj is ResetedEmail => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isResetedEmail"')
  return ResetedEmail_possibleTypes.includes(obj.__typename)
}



const ResetedPassword_possibleTypes: string[] = ['ResetedPassword']
export const isResetedPassword = (obj?: { __typename?: any } | null): obj is ResetedPassword => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isResetedPassword"')
  return ResetedPassword_possibleTypes.includes(obj.__typename)
}



const SignOutCustomer_possibleTypes: string[] = ['SignOutCustomer']
export const isSignOutCustomer = (obj?: { __typename?: any } | null): obj is SignOutCustomer => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isSignOutCustomer"')
  return SignOutCustomer_possibleTypes.includes(obj.__typename)
}



const UpdatedAvatar_possibleTypes: string[] = ['UpdatedAvatar']
export const isUpdatedAvatar = (obj?: { __typename?: any } | null): obj is UpdatedAvatar => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isUpdatedAvatar"')
  return UpdatedAvatar_possibleTypes.includes(obj.__typename)
}



const UploadedAvatar_possibleTypes: string[] = ['UploadedAvatar']
export const isUploadedAvatar = (obj?: { __typename?: any } | null): obj is UploadedAvatar => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isUploadedAvatar"')
  return UploadedAvatar_possibleTypes.includes(obj.__typename)
}



const Wish_possibleTypes: string[] = ['Wish']
export const isWish = (obj?: { __typename?: any } | null): obj is Wish => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isWish"')
  return Wish_possibleTypes.includes(obj.__typename)
}



const Wishlist_possibleTypes: string[] = ['Wishlist']
export const isWishlist = (obj?: { __typename?: any } | null): obj is Wishlist => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isWishlist"')
  return Wishlist_possibleTypes.includes(obj.__typename)
}



const mutation_root_possibleTypes: string[] = ['mutation_root']
export const ismutation_root = (obj?: { __typename?: any } | null): obj is mutation_root => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismutation_root"')
  return mutation_root_possibleTypes.includes(obj.__typename)
}



const query_root_possibleTypes: string[] = ['query_root']
export const isquery_root = (obj?: { __typename?: any } | null): obj is query_root => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isquery_root"')
  return query_root_possibleTypes.includes(obj.__typename)
}


export interface CreatedCustomerPromiseChain{
    customer: (CustomerPromiseChain & {get: <R extends CustomerRequest>(request: R, defaultValue?: FieldsSelection<Customer, R>) => Promise<FieldsSelection<Customer, R>>}),
    token: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface CreatedCustomerObservableChain{
    customer: (CustomerObservableChain & {get: <R extends CustomerRequest>(request: R, defaultValue?: FieldsSelection<Customer, R>) => Observable<FieldsSelection<Customer, R>>}),
    token: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}

export interface CreatedCustomerAddressPromiseChain{
    customer: (CustomerAddressPromiseChain & {get: <R extends CustomerAddressRequest>(request: R, defaultValue?: FieldsSelection<CustomerAddress, R>) => Promise<FieldsSelection<CustomerAddress, R>>}),
    token: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface CreatedCustomerAddressObservableChain{
    customer: (CustomerAddressObservableChain & {get: <R extends CustomerAddressRequest>(request: R, defaultValue?: FieldsSelection<CustomerAddress, R>) => Observable<FieldsSelection<CustomerAddress, R>>}),
    token: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}

export interface CreatedProductPromiseChain{
    products: (ProductPromiseChain & {get: <R extends ProductRequest>(request: R, defaultValue?: FieldsSelection<Product, R>) => Promise<FieldsSelection<Product, R>>}),
    token: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface CreatedProductObservableChain{
    products: (ProductObservableChain & {get: <R extends ProductRequest>(request: R, defaultValue?: FieldsSelection<Product, R>) => Observable<FieldsSelection<Product, R>>}),
    token: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}

export interface CreatedTokenCustomerPromiseChain{
    token: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface CreatedTokenCustomerObservableChain{
    token: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}

export interface CreatedWishlistPromiseChain{
    count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    items: ({get: <R extends WishRequest>(request: R, defaultValue?: FieldsSelection<Wish, R>[]) => Promise<FieldsSelection<Wish, R>[]>}),
    token: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface CreatedWishlistObservableChain{
    count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    items: ({get: <R extends WishRequest>(request: R, defaultValue?: FieldsSelection<Wish, R>[]) => Observable<FieldsSelection<Wish, R>[]>}),
    token: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}

export interface CustomerPromiseChain{
    address: ({get: <R extends CustomerAddressRequest>(request: R, defaultValue?: FieldsSelection<CustomerAddress, R>[]) => Promise<FieldsSelection<CustomerAddress, R>[]>}),
    avatarImage: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    cpf: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    dateOfBirth: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    email: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    firstname: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    gender: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    lastname: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    password: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    subscribe: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    telephone: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    tokens: (CustomerTokensPromiseChain & {get: <R extends CustomerTokensRequest>(request: R, defaultValue?: (FieldsSelection<CustomerTokens, R> | undefined)) => Promise<(FieldsSelection<CustomerTokens, R> | undefined)>}),
    wishlist: (CustomerWishlistPromiseChain & {get: <R extends CustomerWishlistRequest>(request: R, defaultValue?: (FieldsSelection<CustomerWishlist, R> | undefined)) => Promise<(FieldsSelection<CustomerWishlist, R> | undefined)>})
}

export interface CustomerObservableChain{
    address: ({get: <R extends CustomerAddressRequest>(request: R, defaultValue?: FieldsSelection<CustomerAddress, R>[]) => Observable<FieldsSelection<CustomerAddress, R>[]>}),
    avatarImage: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    cpf: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    dateOfBirth: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    email: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    firstname: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    gender: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    lastname: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    password: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    subscribe: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    telephone: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    tokens: (CustomerTokensObservableChain & {get: <R extends CustomerTokensRequest>(request: R, defaultValue?: (FieldsSelection<CustomerTokens, R> | undefined)) => Observable<(FieldsSelection<CustomerTokens, R> | undefined)>}),
    wishlist: (CustomerWishlistObservableChain & {get: <R extends CustomerWishlistRequest>(request: R, defaultValue?: (FieldsSelection<CustomerWishlist, R> | undefined)) => Observable<(FieldsSelection<CustomerWishlist, R> | undefined)>})
}

export interface CustomerAddressPromiseChain{
    CEP: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    bairro: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    cidade: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    defaultBilling: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    defaultShipping: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    email: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    estado: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['ID'] | undefined)) => Promise<(Scalars['ID'] | undefined)>}),
    pais: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    rua: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    userId: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>})
}

export interface CustomerAddressObservableChain{
    CEP: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    bairro: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    cidade: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    defaultBilling: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    defaultShipping: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    email: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    estado: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['ID'] | undefined)) => Observable<(Scalars['ID'] | undefined)>}),
    pais: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    rua: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    userId: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>})
}

export interface CustomerSubscribedPromiseChain{
    subscribed: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>})
}

export interface CustomerSubscribedObservableChain{
    subscribed: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>})
}

export interface CustomerTokensPromiseChain{
    items: ({get: (request?: boolean|number, defaultValue?: Scalars['String'][]) => Promise<Scalars['String'][]>})
}

export interface CustomerTokensObservableChain{
    items: ({get: (request?: boolean|number, defaultValue?: Scalars['String'][]) => Observable<Scalars['String'][]>})
}

export interface CustomerUnsubscribedPromiseChain{
    unsubscribed: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>})
}

export interface CustomerUnsubscribedObservableChain{
    unsubscribed: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>})
}

export interface CustomerWishlistPromiseChain{
    count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    items: ({get: <R extends WishRequest>(request: R, defaultValue?: FieldsSelection<Wish, R>[]) => Promise<FieldsSelection<Wish, R>[]>}),
    userId: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}

export interface CustomerWishlistObservableChain{
    count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    items: ({get: <R extends WishRequest>(request: R, defaultValue?: FieldsSelection<Wish, R>[]) => Observable<FieldsSelection<Wish, R>[]>}),
    userId: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}

export interface DeletedCustomerPromiseChain{
    delete: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>})
}

export interface DeletedCustomerObservableChain{
    delete: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>})
}

export interface PriceRangePromiseChain{
    maxPrice: (PriceValuePromiseChain & {get: <R extends PriceValueRequest>(request: R, defaultValue?: (FieldsSelection<PriceValue, R> | undefined)) => Promise<(FieldsSelection<PriceValue, R> | undefined)>}),
    minPrice: (PriceValuePromiseChain & {get: <R extends PriceValueRequest>(request: R, defaultValue?: (FieldsSelection<PriceValue, R> | undefined)) => Promise<(FieldsSelection<PriceValue, R> | undefined)>})
}

export interface PriceRangeObservableChain{
    maxPrice: (PriceValueObservableChain & {get: <R extends PriceValueRequest>(request: R, defaultValue?: (FieldsSelection<PriceValue, R> | undefined)) => Observable<(FieldsSelection<PriceValue, R> | undefined)>}),
    minPrice: (PriceValueObservableChain & {get: <R extends PriceValueRequest>(request: R, defaultValue?: (FieldsSelection<PriceValue, R> | undefined)) => Observable<(FieldsSelection<PriceValue, R> | undefined)>})
}

export interface PriceValuePromiseChain{
    currency: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    value: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})
}

export interface PriceValueObservableChain{
    currency: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    value: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})
}

export interface ProductPromiseChain{
    description: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    priceRange: (PriceRangePromiseChain & {get: <R extends PriceRangeRequest>(request: R, defaultValue?: FieldsSelection<PriceRange, R>) => Promise<FieldsSelection<PriceRange, R>>}),
    sku: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface ProductObservableChain{
    description: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    priceRange: (PriceRangeObservableChain & {get: <R extends PriceRangeRequest>(request: R, defaultValue?: FieldsSelection<PriceRange, R>) => Observable<FieldsSelection<PriceRange, R>>}),
    sku: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}

export interface ProductWishlistPromiseChain{
    description: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface ProductWishlistObservableChain{
    description: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}

export interface RemovedWishlistPromiseChain{
    items: ({get: <R extends WishRequest>(request: R, defaultValue?: FieldsSelection<Wish, R>[]) => Promise<FieldsSelection<Wish, R>[]>}),
    token: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface RemovedWishlistObservableChain{
    items: ({get: <R extends WishRequest>(request: R, defaultValue?: FieldsSelection<Wish, R>[]) => Observable<FieldsSelection<Wish, R>[]>}),
    token: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}

export interface RequestedEmailPromiseChain{
    requested: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>})
}

export interface RequestedEmailObservableChain{
    requested: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>})
}

export interface ResetedEmailPromiseChain{
    newEmail: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>})
}

export interface ResetedEmailObservableChain{
    newEmail: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>})
}

export interface ResetedPasswordPromiseChain{
    newPassword: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>})
}

export interface ResetedPasswordObservableChain{
    newPassword: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>})
}

export interface SignOutCustomerPromiseChain{
    signOut: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>})
}

export interface SignOutCustomerObservableChain{
    signOut: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>})
}

export interface UpdatedAvatarPromiseChain{
    token: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    updated: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>})
}

export interface UpdatedAvatarObservableChain{
    token: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    updated: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>})
}

export interface UploadedAvatarPromiseChain{
    token: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    uploaded: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>})
}

export interface UploadedAvatarObservableChain{
    token: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    uploaded: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>})
}

export interface WishPromiseChain{
    error: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    product: (ProductWishlistPromiseChain & {get: <R extends ProductWishlistRequest>(request: R, defaultValue?: (FieldsSelection<ProductWishlist, R> | undefined)) => Promise<(FieldsSelection<ProductWishlist, R> | undefined)>}),
    quantity: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    sku: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface WishObservableChain{
    error: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    product: (ProductWishlistObservableChain & {get: <R extends ProductWishlistRequest>(request: R, defaultValue?: (FieldsSelection<ProductWishlist, R> | undefined)) => Observable<(FieldsSelection<ProductWishlist, R> | undefined)>}),
    quantity: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    sku: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}

export interface WishlistPromiseChain{
    count: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    items: ({get: <R extends WishRequest>(request: R, defaultValue?: FieldsSelection<Wish, R>[]) => Promise<FieldsSelection<Wish, R>[]>}),
    token: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface WishlistObservableChain{
    count: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    items: ({get: <R extends WishRequest>(request: R, defaultValue?: FieldsSelection<Wish, R>[]) => Observable<FieldsSelection<Wish, R>[]>}),
    token: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}


/** mutation root */
export interface mutation_rootPromiseChain{
    addProductsToWishlist: ((args: {data: CustomerWishlistInput[]}) => CreatedWishlistPromiseChain & {get: <R extends CreatedWishlistRequest>(request: R, defaultValue?: FieldsSelection<CreatedWishlist, R>) => Promise<FieldsSelection<CreatedWishlist, R>>}),
    createCustomer: ((args: {data: CustomerInput}) => CreatedCustomerPromiseChain & {get: <R extends CreatedCustomerRequest>(request: R, defaultValue?: FieldsSelection<CreatedCustomer, R>) => Promise<FieldsSelection<CreatedCustomer, R>>}),
    createCustomerAddress: ((args: {data: CustomerAddressInput}) => CreatedCustomerAddressPromiseChain & {get: <R extends CreatedCustomerAddressRequest>(request: R, defaultValue?: FieldsSelection<CreatedCustomerAddress, R>) => Promise<FieldsSelection<CreatedCustomerAddress, R>>}),
    createProduct: ((args: {data: ProductInput}) => CreatedProductPromiseChain & {get: <R extends CreatedProductRequest>(request: R, defaultValue?: FieldsSelection<CreatedProduct, R>) => Promise<FieldsSelection<CreatedProduct, R>>}),
    deleteCustomer: ((args: {email: Scalars['String']}) => DeletedCustomerPromiseChain & {get: <R extends DeletedCustomerRequest>(request: R, defaultValue?: FieldsSelection<DeletedCustomer, R>) => Promise<FieldsSelection<DeletedCustomer, R>>}),
    deleteCustomerAddress: ((args: {ID: Scalars['ID']}) => DeletedCustomerPromiseChain & {get: <R extends DeletedCustomerRequest>(request: R, defaultValue?: FieldsSelection<DeletedCustomer, R>) => Promise<FieldsSelection<DeletedCustomer, R>>}),
    removeProductsToWishlist: ((args: {data: CustomerWishlistInput[]}) => RemovedWishlistPromiseChain & {get: <R extends RemovedWishlistRequest>(request: R, defaultValue?: FieldsSelection<RemovedWishlist, R>) => Promise<FieldsSelection<RemovedWishlist, R>>}),
    requestResetEmail: ((args: {email: Scalars['String']}) => RequestedEmailPromiseChain & {get: <R extends RequestedEmailRequest>(request: R, defaultValue?: FieldsSelection<RequestedEmail, R>) => Promise<FieldsSelection<RequestedEmail, R>>}),
    requestResetPwd: ((args: {email: Scalars['String']}) => RequestedEmailPromiseChain & {get: <R extends RequestedEmailRequest>(request: R, defaultValue?: FieldsSelection<RequestedEmail, R>) => Promise<FieldsSelection<RequestedEmail, R>>}),
    resetEmail: ((args: {data: ResetEmailInput}) => ResetedEmailPromiseChain & {get: <R extends ResetedEmailRequest>(request: R, defaultValue?: FieldsSelection<ResetedEmail, R>) => Promise<FieldsSelection<ResetedEmail, R>>}),
    resetPassword: ((args: {data: ResetPwdInput}) => ResetedPasswordPromiseChain & {get: <R extends ResetedPasswordRequest>(request: R, defaultValue?: FieldsSelection<ResetedPassword, R>) => Promise<FieldsSelection<ResetedPassword, R>>}),
    
/** GoShirts_SendEmail */
sendChangeMail: ((args: {data: SendEmailInput}) => RequestedEmailPromiseChain & {get: <R extends RequestedEmailRequest>(request: R, defaultValue?: FieldsSelection<RequestedEmail, R>) => Promise<FieldsSelection<RequestedEmail, R>>}),
    
/** GoShirts_SendEmail */
sendEmailWelcomeNewsletter: ((args: {email: Scalars['String']}) => CustomerSubscribedPromiseChain & {get: <R extends CustomerSubscribedRequest>(request: R, defaultValue?: FieldsSelection<CustomerSubscribed, R>) => Promise<FieldsSelection<CustomerSubscribed, R>>}),
    
/** GoShirts_SendEmail */
sendMailForgotPwd: ((args: {data: SendEmailInput}) => RequestedEmailPromiseChain & {get: <R extends RequestedEmailRequest>(request: R, defaultValue?: FieldsSelection<RequestedEmail, R>) => Promise<FieldsSelection<RequestedEmail, R>>}),
    signInCustomer: ((args: {data: CustomerSignInInput}) => CreatedTokenCustomerPromiseChain & {get: <R extends CreatedTokenCustomerRequest>(request: R, defaultValue?: FieldsSelection<CreatedTokenCustomer, R>) => Promise<FieldsSelection<CreatedTokenCustomer, R>>}),
    signOutCustomer: (SignOutCustomerPromiseChain & {get: <R extends SignOutCustomerRequest>(request: R, defaultValue?: FieldsSelection<SignOutCustomer, R>) => Promise<FieldsSelection<SignOutCustomer, R>>}),
    subscribeNewsletter: ((args: {email: Scalars['String']}) => CustomerSubscribedPromiseChain & {get: <R extends CustomerSubscribedRequest>(request: R, defaultValue?: FieldsSelection<CustomerSubscribed, R>) => Promise<FieldsSelection<CustomerSubscribed, R>>}),
    unsubscribeNewsletter: ((args: {email: Scalars['String']}) => CustomerUnsubscribedPromiseChain & {get: <R extends CustomerUnsubscribedRequest>(request: R, defaultValue?: FieldsSelection<CustomerUnsubscribed, R>) => Promise<FieldsSelection<CustomerUnsubscribed, R>>}),
    updateAvatarImage: ((args: {file: Scalars['String']}) => UpdatedAvatarPromiseChain & {get: <R extends UpdatedAvatarRequest>(request: R, defaultValue?: FieldsSelection<UpdatedAvatar, R>) => Promise<FieldsSelection<UpdatedAvatar, R>>}),
    updateCustomer: ((args: {data: CustomerUpdateInput}) => CreatedCustomerPromiseChain & {get: <R extends CreatedCustomerRequest>(request: R, defaultValue?: FieldsSelection<CreatedCustomer, R>) => Promise<FieldsSelection<CreatedCustomer, R>>}),
    updateCustomerAddress: ((args: {data: CustomerAddressUpdateInput}) => CreatedCustomerAddressPromiseChain & {get: <R extends CreatedCustomerAddressRequest>(request: R, defaultValue?: FieldsSelection<CreatedCustomerAddress, R>) => Promise<FieldsSelection<CreatedCustomerAddress, R>>}),
    
/** GoShirts_UploadFile */
uploadAvatarImage: ((args: {file: Scalars['String']}) => UploadedAvatarPromiseChain & {get: <R extends UploadedAvatarRequest>(request: R, defaultValue?: FieldsSelection<UploadedAvatar, R>) => Promise<FieldsSelection<UploadedAvatar, R>>})
}


/** mutation root */
export interface mutation_rootObservableChain{
    addProductsToWishlist: ((args: {data: CustomerWishlistInput[]}) => CreatedWishlistObservableChain & {get: <R extends CreatedWishlistRequest>(request: R, defaultValue?: FieldsSelection<CreatedWishlist, R>) => Observable<FieldsSelection<CreatedWishlist, R>>}),
    createCustomer: ((args: {data: CustomerInput}) => CreatedCustomerObservableChain & {get: <R extends CreatedCustomerRequest>(request: R, defaultValue?: FieldsSelection<CreatedCustomer, R>) => Observable<FieldsSelection<CreatedCustomer, R>>}),
    createCustomerAddress: ((args: {data: CustomerAddressInput}) => CreatedCustomerAddressObservableChain & {get: <R extends CreatedCustomerAddressRequest>(request: R, defaultValue?: FieldsSelection<CreatedCustomerAddress, R>) => Observable<FieldsSelection<CreatedCustomerAddress, R>>}),
    createProduct: ((args: {data: ProductInput}) => CreatedProductObservableChain & {get: <R extends CreatedProductRequest>(request: R, defaultValue?: FieldsSelection<CreatedProduct, R>) => Observable<FieldsSelection<CreatedProduct, R>>}),
    deleteCustomer: ((args: {email: Scalars['String']}) => DeletedCustomerObservableChain & {get: <R extends DeletedCustomerRequest>(request: R, defaultValue?: FieldsSelection<DeletedCustomer, R>) => Observable<FieldsSelection<DeletedCustomer, R>>}),
    deleteCustomerAddress: ((args: {ID: Scalars['ID']}) => DeletedCustomerObservableChain & {get: <R extends DeletedCustomerRequest>(request: R, defaultValue?: FieldsSelection<DeletedCustomer, R>) => Observable<FieldsSelection<DeletedCustomer, R>>}),
    removeProductsToWishlist: ((args: {data: CustomerWishlistInput[]}) => RemovedWishlistObservableChain & {get: <R extends RemovedWishlistRequest>(request: R, defaultValue?: FieldsSelection<RemovedWishlist, R>) => Observable<FieldsSelection<RemovedWishlist, R>>}),
    requestResetEmail: ((args: {email: Scalars['String']}) => RequestedEmailObservableChain & {get: <R extends RequestedEmailRequest>(request: R, defaultValue?: FieldsSelection<RequestedEmail, R>) => Observable<FieldsSelection<RequestedEmail, R>>}),
    requestResetPwd: ((args: {email: Scalars['String']}) => RequestedEmailObservableChain & {get: <R extends RequestedEmailRequest>(request: R, defaultValue?: FieldsSelection<RequestedEmail, R>) => Observable<FieldsSelection<RequestedEmail, R>>}),
    resetEmail: ((args: {data: ResetEmailInput}) => ResetedEmailObservableChain & {get: <R extends ResetedEmailRequest>(request: R, defaultValue?: FieldsSelection<ResetedEmail, R>) => Observable<FieldsSelection<ResetedEmail, R>>}),
    resetPassword: ((args: {data: ResetPwdInput}) => ResetedPasswordObservableChain & {get: <R extends ResetedPasswordRequest>(request: R, defaultValue?: FieldsSelection<ResetedPassword, R>) => Observable<FieldsSelection<ResetedPassword, R>>}),
    
/** GoShirts_SendEmail */
sendChangeMail: ((args: {data: SendEmailInput}) => RequestedEmailObservableChain & {get: <R extends RequestedEmailRequest>(request: R, defaultValue?: FieldsSelection<RequestedEmail, R>) => Observable<FieldsSelection<RequestedEmail, R>>}),
    
/** GoShirts_SendEmail */
sendEmailWelcomeNewsletter: ((args: {email: Scalars['String']}) => CustomerSubscribedObservableChain & {get: <R extends CustomerSubscribedRequest>(request: R, defaultValue?: FieldsSelection<CustomerSubscribed, R>) => Observable<FieldsSelection<CustomerSubscribed, R>>}),
    
/** GoShirts_SendEmail */
sendMailForgotPwd: ((args: {data: SendEmailInput}) => RequestedEmailObservableChain & {get: <R extends RequestedEmailRequest>(request: R, defaultValue?: FieldsSelection<RequestedEmail, R>) => Observable<FieldsSelection<RequestedEmail, R>>}),
    signInCustomer: ((args: {data: CustomerSignInInput}) => CreatedTokenCustomerObservableChain & {get: <R extends CreatedTokenCustomerRequest>(request: R, defaultValue?: FieldsSelection<CreatedTokenCustomer, R>) => Observable<FieldsSelection<CreatedTokenCustomer, R>>}),
    signOutCustomer: (SignOutCustomerObservableChain & {get: <R extends SignOutCustomerRequest>(request: R, defaultValue?: FieldsSelection<SignOutCustomer, R>) => Observable<FieldsSelection<SignOutCustomer, R>>}),
    subscribeNewsletter: ((args: {email: Scalars['String']}) => CustomerSubscribedObservableChain & {get: <R extends CustomerSubscribedRequest>(request: R, defaultValue?: FieldsSelection<CustomerSubscribed, R>) => Observable<FieldsSelection<CustomerSubscribed, R>>}),
    unsubscribeNewsletter: ((args: {email: Scalars['String']}) => CustomerUnsubscribedObservableChain & {get: <R extends CustomerUnsubscribedRequest>(request: R, defaultValue?: FieldsSelection<CustomerUnsubscribed, R>) => Observable<FieldsSelection<CustomerUnsubscribed, R>>}),
    updateAvatarImage: ((args: {file: Scalars['String']}) => UpdatedAvatarObservableChain & {get: <R extends UpdatedAvatarRequest>(request: R, defaultValue?: FieldsSelection<UpdatedAvatar, R>) => Observable<FieldsSelection<UpdatedAvatar, R>>}),
    updateCustomer: ((args: {data: CustomerUpdateInput}) => CreatedCustomerObservableChain & {get: <R extends CreatedCustomerRequest>(request: R, defaultValue?: FieldsSelection<CreatedCustomer, R>) => Observable<FieldsSelection<CreatedCustomer, R>>}),
    updateCustomerAddress: ((args: {data: CustomerAddressUpdateInput}) => CreatedCustomerAddressObservableChain & {get: <R extends CreatedCustomerAddressRequest>(request: R, defaultValue?: FieldsSelection<CreatedCustomerAddress, R>) => Observable<FieldsSelection<CreatedCustomerAddress, R>>}),
    
/** GoShirts_UploadFile */
uploadAvatarImage: ((args: {file: Scalars['String']}) => UploadedAvatarObservableChain & {get: <R extends UploadedAvatarRequest>(request: R, defaultValue?: FieldsSelection<UploadedAvatar, R>) => Observable<FieldsSelection<UploadedAvatar, R>>})
}

export interface query_rootPromiseChain{
    customerInfo: (CreatedCustomerPromiseChain & {get: <R extends CreatedCustomerRequest>(request: R, defaultValue?: FieldsSelection<CreatedCustomer, R>) => Promise<FieldsSelection<CreatedCustomer, R>>}),
    customerList: ({get: <R extends CustomerRequest>(request: R, defaultValue?: FieldsSelection<Customer, R>[]) => Promise<FieldsSelection<Customer, R>[]>}),
    customerWishList: ({get: <R extends CustomerWishlistRequest>(request: R, defaultValue?: FieldsSelection<CustomerWishlist, R>[]) => Promise<FieldsSelection<CustomerWishlist, R>[]>}),
    productList: ({get: <R extends ProductRequest>(request: R, defaultValue?: FieldsSelection<Product, R>[]) => Promise<FieldsSelection<Product, R>[]>}),
    wishlist: (WishlistPromiseChain & {get: <R extends WishlistRequest>(request: R, defaultValue?: FieldsSelection<Wishlist, R>) => Promise<FieldsSelection<Wishlist, R>>})
}

export interface query_rootObservableChain{
    customerInfo: (CreatedCustomerObservableChain & {get: <R extends CreatedCustomerRequest>(request: R, defaultValue?: FieldsSelection<CreatedCustomer, R>) => Observable<FieldsSelection<CreatedCustomer, R>>}),
    customerList: ({get: <R extends CustomerRequest>(request: R, defaultValue?: FieldsSelection<Customer, R>[]) => Observable<FieldsSelection<Customer, R>[]>}),
    customerWishList: ({get: <R extends CustomerWishlistRequest>(request: R, defaultValue?: FieldsSelection<CustomerWishlist, R>[]) => Observable<FieldsSelection<CustomerWishlist, R>[]>}),
    productList: ({get: <R extends ProductRequest>(request: R, defaultValue?: FieldsSelection<Product, R>[]) => Observable<FieldsSelection<Product, R>[]>}),
    wishlist: (WishlistObservableChain & {get: <R extends WishlistRequest>(request: R, defaultValue?: FieldsSelection<Wishlist, R>) => Observable<FieldsSelection<Wishlist, R>>})
}