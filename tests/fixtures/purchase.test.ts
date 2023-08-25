import { loggedUserFixture } from '../../fixtures';

loggedUserFixture('fixt: logged in user can buy a product', async ({ app }) => {
  await app.home.header.openShop();
  await app.shop.openProductDetailsByName('CHERRY TOMATOES');
  await app.product.addToBag();
  await app.accountDetails.miniCart.placeOrder();
  await app.confirmation.expectOrderPlaced();
});

loggedUserFixture('fixt: logged in user can purchase multiple items', async ({ app }) => {
  // Item #1
  await app.home.header.openShop();
  await app.shop.openProductDetailsByName('CHERRY TOMATOES');
  await app.product.addToBag();

  // Item #2
  await app.product.header.openShop();
  await app.shop.openProductDetailsByName('MARINATED CUCUMBERS NEZHIN STYLE');
  await app.product.addToBag();

  await app.accountDetails.miniCart.placeOrder();
  await app.confirmation.expectOrderPlaced();
});
