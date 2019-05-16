import * as BC_API from '../constant/bc_api';

export function getOwnCoins() {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjUyMjM3MjE0ZWEwMzRiMGE3NmM2ZjE4M2Y3MWI5ODU4OGQxZjA3YzJmZjVkOTdkMzNkNDUzMjY2ZjRjZTg4MjUiLCJpYXQiOjE1NTc5NzI5OTMsImV4cCI6MTU1ODA1OTM5M30.r8HWerFI9SCg5OuOmBHTBX_i0VceSX3f3VRFEqBGQPA';
    const wallet_address = 'UT07a478e636c99d36ab4c60d62ed65dc65106c2eb7351e1ad4885d767b249ee9e0';
    return fetch(BC_API.GET_OWN_COINS, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify({
            address: wallet_address
        }),
    });
}

