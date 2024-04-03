export class Shipping {
    calculateShippingCosts(productId: number, quantity: number): number {
        console.log(`Calculating shipping costs for product ${productId}`);
        // Simulate shipping cost calculation logic
        return 10; // Dummy value
    }
}