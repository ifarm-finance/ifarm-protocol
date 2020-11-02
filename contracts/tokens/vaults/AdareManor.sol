// SPDX-License-Identifier: WTFPL
pragma solidity 0.6.12;

import "../IFAVault.sol";

// Owned by Timelock
contract AdareManor is IFAVault {
    // iUSD-sCRV UNI-V2 LP
    constructor (
        IFAMaster _ifaMaster,
        IStrategy _createIFA,
        IStrategy _shareRevenue
    ) IFAVault(_ifaMaster, "Adare Manor", "SNAIL") public  {
        IStrategy[] memory strategies = new IStrategy[](2);
        strategies[0] = _createIFA;
        strategies[1] = _shareRevenue;
        setStrategies(strategies);
    }
}