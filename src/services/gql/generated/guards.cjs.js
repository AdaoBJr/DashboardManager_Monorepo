
var CreatedCustomer_possibleTypes = ['CreatedCustomer']
module.exports.isCreatedCustomer = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreatedCustomer"')
  return CreatedCustomer_possibleTypes.includes(obj.__typename)
}



var CreatedCustomerAddress_possibleTypes = ['CreatedCustomerAddress']
module.exports.isCreatedCustomerAddress = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreatedCustomerAddress"')
  return CreatedCustomerAddress_possibleTypes.includes(obj.__typename)
}



var CreatedProduct_possibleTypes = ['CreatedProduct']
module.exports.isCreatedProduct = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreatedProduct"')
  return CreatedProduct_possibleTypes.includes(obj.__typename)
}



var CreatedTokenCustomer_possibleTypes = ['CreatedTokenCustomer']
module.exports.isCreatedTokenCustomer = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreatedTokenCustomer"')
  return CreatedTokenCustomer_possibleTypes.includes(obj.__typename)
}



var CreatedWishlist_possibleTypes = ['CreatedWishlist']
module.exports.isCreatedWishlist = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreatedWishlist"')
  return CreatedWishlist_possibleTypes.includes(obj.__typename)
}



var Customer_possibleTypes = ['Customer']
module.exports.isCustomer = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCustomer"')
  return Customer_possibleTypes.includes(obj.__typename)
}



var CustomerAddress_possibleTypes = ['CustomerAddress']
module.exports.isCustomerAddress = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCustomerAddress"')
  return CustomerAddress_possibleTypes.includes(obj.__typename)
}



var CustomerSubscribed_possibleTypes = ['CustomerSubscribed']
module.exports.isCustomerSubscribed = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCustomerSubscribed"')
  return CustomerSubscribed_possibleTypes.includes(obj.__typename)
}



var CustomerTokens_possibleTypes = ['CustomerTokens']
module.exports.isCustomerTokens = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCustomerTokens"')
  return CustomerTokens_possibleTypes.includes(obj.__typename)
}



var CustomerUnsubscribed_possibleTypes = ['CustomerUnsubscribed']
module.exports.isCustomerUnsubscribed = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCustomerUnsubscribed"')
  return CustomerUnsubscribed_possibleTypes.includes(obj.__typename)
}



var CustomerWishlist_possibleTypes = ['CustomerWishlist']
module.exports.isCustomerWishlist = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCustomerWishlist"')
  return CustomerWishlist_possibleTypes.includes(obj.__typename)
}



var DeletedCustomer_possibleTypes = ['DeletedCustomer']
module.exports.isDeletedCustomer = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeletedCustomer"')
  return DeletedCustomer_possibleTypes.includes(obj.__typename)
}



var PriceRange_possibleTypes = ['PriceRange']
module.exports.isPriceRange = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPriceRange"')
  return PriceRange_possibleTypes.includes(obj.__typename)
}



var PriceValue_possibleTypes = ['PriceValue']
module.exports.isPriceValue = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPriceValue"')
  return PriceValue_possibleTypes.includes(obj.__typename)
}



var Product_possibleTypes = ['Product']
module.exports.isProduct = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isProduct"')
  return Product_possibleTypes.includes(obj.__typename)
}



var ProductWishlist_possibleTypes = ['ProductWishlist']
module.exports.isProductWishlist = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isProductWishlist"')
  return ProductWishlist_possibleTypes.includes(obj.__typename)
}



var RemovedWishlist_possibleTypes = ['RemovedWishlist']
module.exports.isRemovedWishlist = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRemovedWishlist"')
  return RemovedWishlist_possibleTypes.includes(obj.__typename)
}



var RequestedEmail_possibleTypes = ['RequestedEmail']
module.exports.isRequestedEmail = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRequestedEmail"')
  return RequestedEmail_possibleTypes.includes(obj.__typename)
}



var ResetedEmail_possibleTypes = ['ResetedEmail']
module.exports.isResetedEmail = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isResetedEmail"')
  return ResetedEmail_possibleTypes.includes(obj.__typename)
}



var ResetedPassword_possibleTypes = ['ResetedPassword']
module.exports.isResetedPassword = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isResetedPassword"')
  return ResetedPassword_possibleTypes.includes(obj.__typename)
}



var SignOutCustomer_possibleTypes = ['SignOutCustomer']
module.exports.isSignOutCustomer = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSignOutCustomer"')
  return SignOutCustomer_possibleTypes.includes(obj.__typename)
}



var UpdatedAvatar_possibleTypes = ['UpdatedAvatar']
module.exports.isUpdatedAvatar = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdatedAvatar"')
  return UpdatedAvatar_possibleTypes.includes(obj.__typename)
}



var UploadedAvatar_possibleTypes = ['UploadedAvatar']
module.exports.isUploadedAvatar = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUploadedAvatar"')
  return UploadedAvatar_possibleTypes.includes(obj.__typename)
}



var Wish_possibleTypes = ['Wish']
module.exports.isWish = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isWish"')
  return Wish_possibleTypes.includes(obj.__typename)
}



var Wishlist_possibleTypes = ['Wishlist']
module.exports.isWishlist = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isWishlist"')
  return Wishlist_possibleTypes.includes(obj.__typename)
}



var mutation_root_possibleTypes = ['mutation_root']
module.exports.ismutation_root = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ismutation_root"')
  return mutation_root_possibleTypes.includes(obj.__typename)
}



var query_root_possibleTypes = ['query_root']
module.exports.isquery_root = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isquery_root"')
  return query_root_possibleTypes.includes(obj.__typename)
}
