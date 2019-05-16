const TEST_SERVER = 'http://192.168.0.140:3000';
const PROD_SERVER = 'http://18.182.78.166'; 

export const GET_COIN_BALANCE = TEST_SERVER + '/chaincode/query/tokens/get_balance';
export const GET_OWN_COINS = TEST_SERVER + '/chaincode/query/tokens/get_my_tokens';
export const TRANSFER_COIN = TEST_SERVER + '/chaincode/invoke/tokens/transfer';