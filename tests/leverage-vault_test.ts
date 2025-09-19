import { Clarinet, Tx, Chain, Account, types } from 'https://deno.land/x/clarinet@v1.5.4/index.ts';
import { assertEquals } from 'https://deno.land/std@0.170.0/testing/asserts.ts';

Clarinet.test({
  name: "Leverage Vault: User Registration Test",
  async fn(chain: Chain, accounts: Map<string, Account>) {
    const deployer = accounts.get('deployer')!;
    const user = accounts.get('wallet_1')!;

    let block = chain.mineBlock([
      Tx.contractCall('leverage-vault', 'register-user', [types.some('https://example.com/profile')], user.address)
    ]);

    assertEquals(block.receipts.length, 1);
    assertEquals(block.receipts[0].result, 'true');
  }
});

Clarinet.test({
  name: "Leverage Vault: Healthcare Provider Registration Test",
  async fn(chain: Chain, accounts: Map<string, Account>) {
    const deployer = accounts.get('deployer')!;
    const provider = accounts.get('wallet_2')!;

    let block = chain.mineBlock([
      Tx.contractCall('leverage-vault', 'register-provider', 
        [types.utf8('Test Hospital'), types.utf8('General')], 
        provider.address)
    ]);

    assertEquals(block.receipts.length, 1);
    assertEquals(block.receipts[0].result, 'true');
  }
});