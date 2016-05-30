//2012.03.27 fix 年息為1.08% by 2295
//2012.04.05 修改所得格式 by 2295
//2012.05.02 修改稽徵機關代碼檔 by 2295
//2012.05.03 修改稽徵機關代碼檔(中區) by 2295
//2012.05.03 修改顯示所得項目9A-70 by 2295
//2012.05.17 增加所得格式 by 2295
//2013.01.18 fix 財產交易所得.「自行列舉必要費用及成本」及「非房屋財產交易所得」之下拉選單項目置於前二個選項
//          fix 「自行列舉必要費用及成本」名稱修改為「房屋財產交易所得-自行列舉必要費用及成本」 by 2295
//2013.01.23 add 9A-36牙醫師配合政府政策辦理老人補助裝置假牙計畫收入[費用率標準78%]
//          fix 9A 西醫師各科(掛號費收入)[費用率標準78%]
//      fix 租賃所得之所得格式代號，修改為51L、51J、51K、51I by 2295
//2013.01.24 fix 9A-41藥師(全民健保收入已區分藥費及藥事服務費收入者-藥費)[費用率標準100%].收入總額改成readonly
//        9A-41 藥師(全民健保收入已區分藥費及藥事服務費收入者-藥事服務費)[費用率標準20%].收入總額改成readonly by 2295
//2013.01.30 fix 年息為1.37% by 2295
//2013.03.26 fix 所得格式 by 2295
//2013.03.28 fix 稽徵機關名稱 by 2295
//2013.04.22 fix 97受贈所得.所得格式 by 2295
//2013.04.23 fix 稽徵機關名稱 by 2295
function spacePadding(str, len) {

  var nlen = str.length;
  var retStr = str;
  for (i = nlen; i < len; i++) {
    retStr += " ";
}
    return retStr;
}

function MyIrc() {
    this.Irc100 = new Irc100("", "", "", "", "", "", "", "N");

    this.IrcReport = new IrcReport("");

    this.Irc00 = new Irc00("2003", "0", "0", "0", "0", "0", "005.200",
            "20031010090000", "0", spacePadding("Linux", 15), "0",
            spacePadding("", 46), "", "");

    this.Irc01 = new Irc01("", "", // YR
            "", // TAX_PAYER
            "", // IDN
            "", // BIRTH
            "", // SPOUS
            "", // SPOUS_IDN
            "", // SPOUS_BIRTH
            "", // HSN
            "", // TOWN
            "", // VILL
            "", // LIN
            "", // ADDR
            "", // RENT
            "", // COMU_HSN
            "", // COMU_TOWN
            "", // COMU_VILL
            "", // COMU_LIN
            "", // COMU_ADDR
            "", // TEL_D
            "", // TEL_N
            "", // EMAIL
            "", // PFN
            "", // PROP
            "", // SAVING
            "", // DISAB
            "", // EDU
            "", // COMMON
            "", // INCOM
            "");

    this.Irc02 = new Irc02("", "", "", "", "", "", "", "");
    this.Irc03 = new Array();
    this.Irc04 = new Array();
    this.Irc05 = new Array();
    this.Irc06 = new Array();
    this.Irc07 = new Array();
    this.Irc08 = new Irc08(0, 0, 0, 0, 0);
    this.Irc09 = new Array();
    this.Irc10 = new Irc10(0/* ZF */, 0/* ZG */, 0/* ZH */, 0/* ZI */, 0/* ZJ */,
            0/* ZK */, 0/* ZM */, 0/* ZL */, 0/* ZR */, 0/* Z2 */, 0/* Z3 */,
            0/* Z4 */, 0/* Z8 */, 0/* R1 */, 0/* R2 */, 0/* R3 */, 0/* R4 */,
            0/* R6 */, 0/* R7 */, 0/* R8 */, 0/* R9 */, 0/* R10 */, 0/* R11 */, 0/* R12 */);
    this.Irc11 = new Irc11(""/* CALC_TP */, 0/* t1 */, 0/* t2 */, 0/* t3 */,
            0/* t4 */, 0/* a1 */, 0/* a2 */, 0/* a3 */, 0/* a4 */, 0/* b1 */,
            0/* b2 */, 0/* b3 */, 0/* b4 */, 0/* b5 */, 0/* b6 */, 0/* b7 */,
            0/* b8 */, 0/* b9 */, 0/* b10 */, 0/* b11 */, 0/* b12 */, 0/* b13 */,
            0/* b14 */, 0/* b15 */, 0/* b16 */, 0/* b17 */, 0/* b18 */, 0/* c1 */,
            0/* c2 */, 0/* c3 */, 0/* c4 */, 0/* c5 */, 0/* c6 */, 0/* c7 */,
            0/* c8 */, 0/* c9 */, 0/* c10 */, 0/* c11 */, 0/* c12 */, 0/* c13 */,
            0/* c14 */, 0/* c15 */, 0/* c16 */, 0/* c17 */, 0/* c18 */, 0/* TOTAL */);
    this.Irc12 = new Irc12(0/* c1 */, 0/* c2 */, 0/* c3 */, 0/* c4 */, 0/* c5 */,
            0/* c6 */, 0/* PayBack */, 0/* Pay */);
    this.Irc13 = new Irc13("", "", "", "", "", 0, "");
    this.Irc14 = new Irc14("", "");
    this.Irc04Type21Cost = new Irc04Type21Cost(0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.Irc04Type21CostEdit = new Irc04Type21CostEdit(0, 0, 0, 0, 0, 0, 0, 0,
            0);
    this.Irc18 = new Irc18("N", 0, ""); // 是否要從top.IRC18(還未按下新增/修改又開視窗),可處份日之次日時價
                                        // //可處份日之次日時價

}

function Irc100(TAX_PAYER, IDN, IDLogin, CAType, LoginWay, TwCAfilter,
        UploadPFN, DeuctDoc) {

    this.TAX_PAYER = TAX_PAYER;
    this.IDN = IDN;
    this.IDLogin = IDLogin;
    this.CAType = CAType;
    this.LoginWay = LoginWay;
    this.TwCAfilter = TwCAfilter; // for 紀錄原登錄台網filter
    this.UploadPFN = UploadPFN; // for 紀錄是 上傳成功並可列印收執聯value="Y" & 離開收執聯畫面改成 "N"
                                // 或""
    this.DeuctDoc = DeuctDoc; // 是否需要應檢附證明報表

}

function IrcReport(DeuctDoc) {

    this.DeuctDoc = DeuctDoc;

}

function Irc00(FILE_YR, FILE_TP, FILE_PrivateBuild, FILE_DebugBuild,
        FILE_PreRelease, FILE_SpecialBuild, FILE_VERSION, FILE_CRT_DATE, OS_TP,
        OS_VERSION, OS_CSD_VER, SPACE, IDN, NAME) {

    this.RecordID = "IRC00";
    this.FILE_YR = FILE_YR;
    this.FILE_TP = FILE_TP;
    this.FILE_PrivateBuild = FILE_PrivateBuild;
    this.FILE_DebugBuild = FILE_DebugBuild;
    this.FILE_PreRelease = FILE_PreRelease;
    this.FILE_SpecialBuild = FILE_SpecialBuild;
    this.FILE_VERSION = FILE_VERSION;
    this.FILE_CRT_DATE = FILE_CRT_DATE;
    this.OS_TP = OS_TP;
    this.OS_VERSION = OS_CSD_VER;
    this.OS_CSD_VER = OS_CSD_VER;
    this.SPACE = SPACE;
    this.IDN = IDN;
    this.NAME = NAME;

}

function Irc01(YR, TAX_PAYER, IDN, BIRTH, SPOUS, SPOUS_IDN, SPOUS_BIRTH, HSN,
        TOWN, VILL, LIN, ADDR, RENT, COMU_HSN, COMU_TOWN, COMU_VILL, COMU_LIN,
        COMU_ADDR, TEL_D, TEL_N, EMAIL, PFN, PROP, SAVING, DISAB, EDU, COMMON,
        INCOM, MEMO, MARRIAGE_OPT) {

    this.RecordID = "IRC01";
    this.YR = YR;
    this.TAX_PAYER = TAX_PAYER;
    this.IDN = IDN;
    this.BIRTH = BIRTH;
    this.SPOUS = SPOUS;
    this.SPOUS_IDN = SPOUS_IDN;
    this.SPOUS_BIRTH = SPOUS_BIRTH;
    this.HSN = HSN;
    this.TOWN = TOWN;
    this.VILL = VILL;
    this.LIN = LIN;
    this.ADDR = ADDR;
    this.RENT = RENT;
    this.COMU_HSN = COMU_HSN;
    this.COMU_TOWN = COMU_TOWN;
    this.COMU_VILL = COMU_VILL;
    this.COMU_LIN = COMU_LIN;
    this.COMU_ADDR = COMU_ADDR;
    this.TEL_D = TEL_D;
    this.TEL_N = TEL_N;
    this.EMAIL = EMAIL;
    this.PFN = PFN;
    this.PROP = PROP;
    this.SAVING = SAVING;
    this.DISAB = DISAB;
    this.EDU = EDU;
    this.COMMON = COMMON;
    this.INCOM = INCOM;
    this.MEMO = MEMO;
    this.MARRIAGE_OPT = MARRIAGE_OPT;
}

function Irc02(STUS, AMT, NM, IDN, BANK_TP, BANK, ACCT_NO, ACCT_TP , INIT_AMT) {

    this.RecordID = "IRC02";
    this.STUS = STUS;
    this.AMT = AMT;
    this.NM = NM;
    this.IDN = IDN;
    this.BANK_TP = BANK_TP;
    this.BANK = BANK;
    this.ACCT_NO = ACCT_NO;
    this.ACCT_TP = ACCT_TP;
    this.INIT_AMT = INIT_AMT;
}

function Irc03(NM, IDN, TITLE, YR, SCHL, RESD, EXEMP) {

    this.RecordID = "IRC03";
    this.NM = NM;
    this.IDN = IDN;
    this.TITLE = TITLE;
    this.YR = YR;
    this.SCHL = SCHL;
    this.RESD = RESD;
    this.EXEMP = EXEMP;
}

function Irc04(INCM_CN, INCM_FMT, INCM_NO, IDN, LOSN, BAN, RVNU_AMT, INCM_AMT,
        COST, WH_TAX) {
    this.RecordID = "IRC04";
    this.INCM_CN = INCM_CN;
    this.INCM_FMT = INCM_FMT;
    this.INCM_NO = INCM_NO;
    this.IDN = IDN;
    this.LOSN = LOSN;
    this.BAN = BAN;
    this.RVNU_AMT = RVNU_AMT;
    this.INCM_AMT = INCM_AMT;
    this.COST = COST;
    this.WH_TAX = WH_TAX;
}

function Irc05(DED_TP, IDN, AMT) {

    this.RecordID = "IRC05";
    this.DED_TP = DED_TP;
    this.IDN = IDN;
    this.AMT = AMT;
}

function Irc06(NM, IDN, CO, BAN, DOCU_NO, GET_DATE, PAY_DIVD, T_CTX, PREV_CTX,
        UN_CTX, ZSY_CTX, DED_ORDER) {

    this.RecordID = "IRC06";
    this.NM = NM;
    this.IDN = IDN;
    this.CO = CO;
    this.BAN = BAN;
    this.DOCU_NO = DOCU_NO;
    this.GET_DATE = GET_DATE;
    this.PAY_DIVD = PAY_DIVD;
    this.T_CTX = T_CTX;
    this.PREV_CTX = PREV_CTX;
    this.UN_CTX = UN_CTX;
    this.ZSY_CTX = ZSY_CTX;
    this.DED_ORDER = DED_ORDER;
}

function Irc07(REBUY_YR, REBUY_LOSN, REBUY_PRICE, SALE_YR, SALE_LOS,
        SALE_PRICE, SALE_ADDR, PRE_HOUSE_AMT, PRE_AMT, AMT) {

    this.RecordID = "IRC07";
    this.REBUY_YR = REBUY_YR;
    this.REBUY_LOSN = REBUY_LOSN;
    this.REBUY_PRICE = REBUY_PRICE;
    this.SALE_YR = SALE_YR;
    this.SALE_LOS = SALE_LOS;
    this.SALE_PRICE = SALE_PRICE;
    this.SALE_ADDR = SALE_ADDR;
    this.PRE_HOUSE_AMT = PRE_HOUSE_AMT;
    this.PRE_AMT = PRE_AMT;
    this.AMT = AMT;
}

function Irc08(ITEM_A, ITEM_B, ITEM_C, ITEM_D, ITEM_E) {

    this.RecordID = "IRC08";
    this.ITEM_A = ITEM_A;
    this.ITEM_B = ITEM_B;
    this.ITEM_C = ITEM_C;
    this.ITEM_D = ITEM_D;
    this.ITEM_E = ITEM_E;
}

function Irc09(LOSN, DEPR, REPAIR, LANO_TAX, HOUSE_TAX, INSTEREST, INSURANCE,
        OTHER) {

    this.RecordID = "IRC09";
    this.LOSN = LOSN;
    this.DEPR = DEPR;
    this.REPAIR = REPAIR;
    this.LANO_TAX = LANO_TAX;
    this.HOUSE_TAX = HOUSE_TAX;
    this.INSTEREST = INSTEREST;
    this.INSURANCE = INSURANCE;
    this.OTHER = OTHER;
}

function Irc10(ZF, ZG, ZH, ZI, ZJ, ZK, ZM, ZL, ZR, Z2, Z3, Z4, Z8, R1, R2, R3,
        R4, R6, R7, R8, R9, R10, R11, R12) {

    this.RecordID = "IRC10";
    this.ZF = ZF;
    this.ZG = ZG;
    this.ZH = ZH;
    this.ZI = ZI;
    this.ZJ = ZJ;
    this.ZK = ZK;
    this.ZM = ZM;
    this.ZL = ZL;
    this.ZR = ZR;
    this.Z2 = Z2;
    this.Z3 = Z3;
    this.Z4 = Z4;
    this.Z8 = Z8;
    this.R1 = R1;
    this.R2 = R2;
    this.R3 = R3;
    this.R4 = R4;
    this.R6 = R6;
    this.R7 = R7;
    this.R8 = R8;
    this.R9 = R9;
    this.R10 = R10;
    this.R11 = R11;
    this.R12 = R12;

}

function Irc11(CALC_TP, t1, t2, t3, t4, a1, a2, a3, a4, b1, b2, b3, b4, b5, b6,
        b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, c1, c2, c3,
        c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18,
        TOTAL) {

    this.RecordID = "IRC11";
    this.CALC_TP = CALC_TP;
    this.t1 = t1;
    this.t2 = t2;
    this.t3 = t3;
    this.t4 = t4;
    this.a1 = a1;
    this.a2 = a2;
    this.a3 = a3;
    this.a4 = a4;
    this.b1 = b1;
    this.b2 = b2;
    this.b3 = b3;
    this.b4 = b4;
    this.b5 = b5;
    this.b6 = b6;
    this.b7 = b7;
    this.b8 = b8;
    this.b9 = b9;
    this.b10 = b10;
    this.b11 = b11;
    this.b12 = b12;
    this.b13 = b13;
    this.b14 = b14;
    this.b15 = b15;
    this.b16 = b16;
    this.b17 = b17;
    this.b18 = b18;
    this.c1 = c1;
    this.c2 = c2;
    this.c3 = c3;
    this.c4 = c4;
    this.c5 = c5;
    this.c6 = c6;
    this.c7 = c7;
    this.c8 = c8;
    this.c9 = c9;
    this.c10 = c10;
    this.c11 = c11;
    this.c12 = c12;
    this.c13 = c13;
    this.c14 = c14;
    this.c15 = c15;
    this.c16 = c16;
    this.c17 = c17;
    this.c18 = c18;
    this.TOTAL = TOTAL;
}

function Irc12(c1, c2, c3, c4, c5, c6, PayBack, Pay) {

    this.RecordID = "IRC12";
    this.c1 = c1;
    this.c2 = c2;
    this.c3 = c3;
    this.c4 = c4;
    this.c5 = c5;
    this.c6 = c6;
    this.PayBack = PayBack;
    this.Pay = Pay;
}

function Irc13(IDN, CARD_NO, VALID_DATE, TAX_NO, CITY_CODE, AMOUNT, AUTHORIZE) {

    this.RecordID = "IRC13";
    this.IDN = IDN;
    this.CARD_NO = CARD_NO;
    this.VALID_DATE = VALID_DATE;
    this.TAX_NO = TAX_NO;
    this.CITY_CODE = CITY_CODE;
    this.AMOUNT = AMOUNT;
    this.AUTHORIZE = AUTHORIZE;
}

function Irc14(IDN, type) {

    this.RecordID = "IRC14";
    this.IDN = IDN;
    this.type = type;
}

function Irc99(LoginWay, Other) {

    this.LoginWay = LoginWay;
    this.Other = Other;
}

function Irc04Type21Cost(LOSNNO, COST1, COST2, COST3, COST4, COST5, COST6,
        COST7, COSTTotal) {
    this.LOSNNO = LOSNNO;
    this.COST1 = COST1;
    this.COST2 = COST2;
    this.COST3 = COST3;
    this.COST4 = COST4;
    this.COST5 = COST5;
    this.COST6 = COST6;
    this.COST7 = COST7;
    this.COSTTotal = COSTTotal;

}

function Irc04Type21CostEdit(LOSNNO, COST1, COST2, COST3, COST4, COST5, COST6,
        COST7, COSTTotal) {
    this.LOSNNO = LOSNNO;
    this.COST1 = COST1;
    this.COST2 = COST2;
    this.COST3 = COST3;
    this.COST4 = COST4;
    this.COST5 = COST5;
    this.COST6 = COST6;
    this.COST7 = COST7;
    this.COSTTotal = COSTTotal;

}

function Irc18(TOP18, BOUNAMT, DATE) {
    this.TOP18 = TOP18;
    this.BOUNAMT = BOUNAMT;
    this.DATE = DATE;
}

function IncomeType(kind, type, name, LOSN, BAN, RVNU_AMT, COST, INCM_AMT,
        WH_TAX, incm_cn, incm_fmt, incm_no, cost, withhold, withhold_lim,
        AMTReadOnly, Trust_Property, RVNU_AMTReadOnly, COSTReadOnly) {

    this.kind = kind;
    this.type = type;
    this.name = name;
    this.LOSN = LOSN;
    this.BAN = BAN;
    this.RVNU_AMT = RVNU_AMT;
    this.INCM_AMT = INCM_AMT;
    this.COST = COST;
    this.WH_TAX = WH_TAX;
    this.incm_cn = incm_cn;
    this.incm_fmt = incm_fmt;
    this.incm_no = incm_no;
    this.cost = cost;
    this.withhold = withhold;
    this.withhold_lim = withhold_lim;
    this.AMTReadOnly = AMTReadOnly; // 所得總額 欄位disable
    this.Trust_Property = Trust_Property; // 信託註記
    this.RVNU_AMTReadOnly = RVNU_AMTReadOnly; // 收入總額 欄位disable
    this.COSTReadOnly = COSTReadOnly; // 必要費用成本 欄位disable
}
// 所得格式代號
// 1.刪除序號69、70(9A-41)，部頒費用率已無此二項
// 2.擬新增9A-54職能治療師(費用率20%)及9A-45營養師(費用率20%)
// 3.更正中、西醫師、醫事檢驗師、物理治療師之部分負擔費用率
// 4.另所得資料頁籤序號12(54C信託財產各類所得憑單)之新增畫面應有扣繳稅額欄位，//
// 01 this.kind = kind;
// 02 this.type = type;
// 03 this.name = name;
// 04 this.LOSN = LOSN;
// 05 this.BAN = BAN;
// 06 this.RVNU_AMT = RVNU_AMT;
// 07 this.INCM_AMT = INCM_AMT;
// 08 this.COST = COST;
// 09 this.WH_TAX = WH_TAX;
// 10 this.incm_cn = incm_cn;
// 11 this.incm_fmt = incm_fmt;
// 12 this.incm_no = incm_no;
// 13 this.cost = cost;
// 14 this.withhold = withhold;
// 15 this.withhold_lim = withhold_lim;
// 16 this.AMTReadOnly = AMTReadOnly; //所得總額 欄位disable
// 17 this.Trust_Property = Trust_Property; //信託註記
// 18 this.RVNU_AMTReadOnly = RVNU_AMTReadOnly //收入總額 欄位disable
// 19 this.COSTReadOnly = COSTReadOnly //必要費用成本 欄位disable

function makeIncomeTypes() {
    top.incmTypes[0]   = new IncomeType("1" , "1" , "50  扣免繳薪資所得" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "所得總額" , "扣繳稅額" , "3" , "50" , "" , "0" , "05" , "41" , "N" , "" , "N" , "N");
    top.incmTypes[1]   = new IncomeType("1" , "6" , "79高爾夫球童薪資所得" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "所得總額" , "" , "3" , "79G" , "" , "0" , "00" , "00" , "N" , "" , "N" , "N");
    top.incmTypes[2]   = new IncomeType("1" , "5" , "79S非扣繳薪資所得(例如候選人於選舉期間給付之薪資)" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "所得總額" , "" , "3" , "79S" , "" , "0" , "00" , "00" , "N" , "" , "N" , "N");
    top.incmTypes[3]   = new IncomeType("1" , "2" , "50E 薪資（員工分紅）" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "所得總額" , "扣繳稅額" , "3" , "50E" , "" , "0" , "00" , "00" , "N" , "" , "N" , "N");
    top.incmTypes[4]   = new IncomeType("1" , "3" , "79  緩課記名股票之薪資所得(員工紅利)" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "所得總額" , "" , "3" , "79" , "S" , "0" , "15" , "41" , "N" , "" , "N" , "N");
    top.incmTypes[5]   = new IncomeType("1" , "4" , "79  信託緩課記名股票之薪資所得(員工紅利)" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "所得總額" , "" , "3" , "79" , "S" , "0" , "00" , "00" , "N" , "T" , "N" , "N");
    top.incmTypes[6]   = new IncomeType("1" , "7" , "50  大陸地區薪資所得" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "所得總額" , "" , "3" , "50A" , "" , "50" , "00" , "00" , "N" , "" , "N" , "N");
    top.incmTypes[7]   = new IncomeType("2" , "1" , "5A  金融機構" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "所得總額" , "扣繳稅額" , "4" , "5A" , "" , "0" , "10" , "21" , "N" , "" , "N" , "N");
    top.incmTypes[8]   = new IncomeType("2" , "2" , "5B  非金融機構" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "所得總額" , "扣繳稅額" , "4" , "5B" , "" , "0" , "10" , "21" , "N" , "" , "N" , "N");
    top.incmTypes[9]   = new IncomeType("2" , "3" , "73  抵押利息" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "所得總額" , "" , "4" , "73" , "" , "0" , "10" , "16" , "N" , "" , "N" , "N");
    top.incmTypes[10]  = new IncomeType("2" , "4" , "5A  信託財產金融機構" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "所得總額" , "扣繳稅額" , "4" , "5A" , "" , "0" , "00" , "00" , "N" , "T" , "N" , "N");
    top.incmTypes[11]  = new IncomeType("2" , "7" , "5AP 信託財產金融機構（有價證券借貸轉開憑單）" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "所得總額" , "扣繳稅額" , "4" , "5AP" , "" , "0" , "00" , "00" , "N" , "T" , "N" , "N");
    top.incmTypes[12]  = new IncomeType("2" , "5" , "5B  信託財產其他利息" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "所得總額" , "扣繳稅額" , "4" , "5B" , "" , "0" , "00" , "00" , "N" , "T" , "N" , "N");
    top.incmTypes[13]  = new IncomeType("2" , "8" , "5BP 信託財產其他利息（有價證券借貸轉開憑單）" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "所得總額" , "扣繳稅額" , "4" , "5BP" , "" , "0" , "00" , "00" , "N" , "T" , "N" , "N");
    top.incmTypes[14]  = new IncomeType("2" , "6" , "77  浮動利率資金交易平台-利息所得" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "所得總額" , "" , "4" , "77I" , "" , "0" , "00" , "00" , "N" , "" , "N" , "N");
    top.incmTypes[15]  = new IncomeType("2" , "90" , "73  大陸地區利息所得" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "所得總額" , "" , "4" , "5C" , "" , "0" , "00" , "00" , "N" , "" , "N" , "N");
    top.incmTypes[16]  = new IncomeType("2" , "91" , "73  大陸地區信託利息所得" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "所得總額" , "" , "4" , "5D" , "" , "0" , "00" , "00" , "N" , "G" , "N" , "N");
    top.incmTypes[17]  = new IncomeType("3" , "1" , "54C 股利憑單(87或以後年度股利憑單)" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "股利總額" , "可扣抵稅額" , "1" , "54C" , "" , "0" , "00" , "50" , "N" , "" , "N" , "N");
    top.incmTypes[18]  = new IncomeType("3" , "19" , "54E 87年度或以後年度股利或盈餘所得減項(有價證券借貸轉開憑單)[憑單持有人為借券人]" , "發行公司名稱" , "發行公司統一編號" , "" , "" , "股利總額減項" , "可扣抵稅額減項" , "1" , "54E" , "" , "0" , "00" , "49" , "N" , "" , "N" , "N");
    top.incmTypes[19]  = new IncomeType("3" , "12" , "54C 信託財產各類所得憑單（87年度或以後年度股利或盈餘）（自益）" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "股利總額" , "可扣抵稅額" , "1" , "54C" , "" , "0" , "00" , "00" , "N" , "T" , "N" , "N");
    top.incmTypes[20]  = new IncomeType("3" , "28" , "54X 信託財產各類所得憑單（87年度或以後年度股利或盈餘）（他益）" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "股利總額" , "可扣抵稅額" , "1" , "54X" , "" , "0" , "00" , "00" , "N" , "T" , "N" , "N");
    top.incmTypes[21]  = new IncomeType("3" , "6" , "54  各類所得扣(免)繳憑單（86年度或以前年度之股利或盈餘）" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "所得總額" , "" , "1" , "54P" , "" , "0" , "00" , "00" , "N" , "" , "N" , "N");
    top.incmTypes[22]  = new IncomeType("3" , "20" , "54J 86年度或以前年度股利或盈餘所得減項(有價證券借貸轉開憑單)[憑單持有人為借券人]" , "發行公司名稱" , "發行公司統一編號" , "" , "" , "股利或盈餘總額減項" , "" , "1" , "54J" , "" , "0" , "00" , "00" , "N" , "" , "N" , "N");
    top.incmTypes[23]  = new IncomeType("3" , "13" , "54  信託各類所得憑單（含86年度或以前年度之股利或盈餘）" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "所得總額" , "" , "1" , "54P" , "" , "0" , "00" , "00" , "N" , "T" , "N" , "N");
    top.incmTypes[24]  = new IncomeType("3" , "15" , "54F 各類所得扣(免)繳憑單(87年度或以後年度非居住者或大陸地區股東股利)" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "所得總額" , "扣繳稅額" , "1" , "54F" , "" , "0" , "00" , "49" , "N" , "" , "N" , "N");
    top.incmTypes[25]  = new IncomeType("3" , "16" , "54F 信託財產各類所得扣(免)繳憑單(87年度或以後年度非居住者或大陸地區股東股利)" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "所得總額" , "扣繳稅額" , "1" , "54F" , "" , "0" , "00" , "00" , "N" , "T" , "N" , "N");
    top.incmTypes[26]  = new IncomeType("3" , "25" , "54K 信託財產86年度或以前年度之股利或盈餘（有價證券借貸轉開憑單）" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "所得總額" , "扣繳稅額" , "1" , "54K" , "" , "0" , "00" , "00" , "N" , "T" , "N" , "N");
    top.incmTypes[27]  = new IncomeType("3" , "26" , "54P 信託財產87年度或以後年度之股利或盈餘（有價證券借貸轉開憑單）（自益）" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "所得總額" , "扣繳稅額" , "1" , "54P" , "1" , "0" , "00" , "00" , "N" , "T" , "N" , "N");
    top.incmTypes[28]  = new IncomeType("3" , "29" , "54W 信託財產87年度或以後年度之股利或盈餘（有價證券借貸轉開憑單）（他益）" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "所得總額" , "扣繳稅額" , "1" , "54W" , "" , "0" , "00" , "00" , "N" , "T" , "N" , "N");
    top.incmTypes[29]  = new IncomeType("3" , "7" , "54Y 各類所得扣(免)繳憑單(其他)" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "所得總額" , "扣繳稅額" , "1" , "54Y" , "" , "0" , "10" , "31" , "N" , "" , "N" , "N");
    top.incmTypes[30]  = new IncomeType("3" , "14" , "54Y 信託各類所得憑單（其他）" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "所得總額" , "扣繳稅額" , "1" , "54Y" , "" , "0" , "00" , "00" , "N" , "T" , "N" , "N");
    top.incmTypes[31]  = new IncomeType("3" , "3" , "71  緩課股票轉讓所得申報憑單" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "股利總額" , "可扣抵稅額" , "1" , "54H" , "" , "0" , "00" , "49" , "N" , "" , "N" , "N");
    top.incmTypes[32]  = new IncomeType("3" , "10" , "71  信託財產緩課股票轉讓所得憑單" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "股利總額" , "可扣抵稅額" , "1" , "54H" , "" , "0" , "00" , "00" , "N" , "T" , "N" , "N");
    top.incmTypes[33]  = new IncomeType("3" , "4" , "71M緩課記名股票之營利所得（87.12.31以前取得公開發行上市記名股票）" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "所得總額" , "" , "1" , "71M" , "" , "0" , "00" , "00" , "N" , "" , "N" , "N");
    top.incmTypes[34]  = new IncomeType("3" , "11" , "71M信託財產緩課記名股票之營利所得（87.12.31以前取得公開發行上市記名股票）" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "所得總額" , "" , "1" , "71M" , "" , "0" , "00" , "00" , "N" , "T" , "N" , "N");
    top.incmTypes[35]  = new IncomeType("3" , "2" , "71D " + taxYear + "年度營利事業投資人明細及分配盈餘表" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "股利總額" , "扣繳稅額" , "1" , "71D" , "" , "0" , "00" , "34" , "N" , "" , "N" , "N");
    top.incmTypes[36]  = new IncomeType("3" , "8" , "54N 其他營利所得（未符增資緩課資料）" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "1" , "54N" , "" , "0" , "00" , "00" , "Y" , "" , "N" , "N");
    top.incmTypes[37]  = new IncomeType("3" , "9" , "54A 小規模查定課徵營利所得（例如業別為計程車、小吃店、公益彩券乙類經銷商）" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "所得總額" , "" , "1" , "54A" , "" , "0" , "00" , "00" , "N" , "" , "N" , "N");
    top.incmTypes[38]  = new IncomeType("3" , "23" , "71  一時貿易盈餘（所得按售價總金額6﹪計算）" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "" , "1" , "54H" , "5" , "94" , "00" , "00" , "Y" , "" , "N" , "Y");
    top.incmTypes[39]  = new IncomeType("3" , "27" , "71  一時貿易所得（自行列舉必要費用及成本）" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "" , "1" , "54H" , "6" , "0" , "00" , "00" , "Y" , "" , "N" , "N");
    top.incmTypes[40]  = new IncomeType("3" , "24" , "71J 一時貿易所得-珠寶（所得按售價總金額6﹪計算）" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "" , "1" , "71J" , "2" , "94" , "00" , "00" , "Y" , "" , "N" , "Y");
    top.incmTypes[41]  = new IncomeType("3" , "21" , "71J 一時貿易所得-珠寶（自行列舉必要費用及成本）" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "" , "1" , "71J" , "" , "0" , "00" , "00" , "Y" , "" , "N" , "N");
    top.incmTypes[42]  = new IncomeType("3" , "22" , "71T 個人經營計程車營利所得" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "" , "1" , "71T" , "" , "0" , "00" , "00" , "Y" , "" , "N" , "N");
    top.incmTypes[43]  = new IncomeType("3" , "17" , "71  多層次傳銷事業參加人（自行列舉必要費用及成本）" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "" , "1" , "54H" , "2" , "0" , "00" , "00" , "Y" , "" , "N" , "N");
    top.incmTypes[44]  = new IncomeType("3" , "18" , "71  多層次傳銷事業參加人（按建議售價總金額＊６％計算）" , "所得發生處所名稱" , "扣繳單位統一編號" , "建議銷售總金額" , "" , "所得總額" , "" , "1" , "54H" , "3" , "94" , "00" , "00" , "Y" , "" , "N" , "N");
    top.incmTypes[45]  = new IncomeType("3" , "51" , "71  大陸地區營利所得" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "所得總額" , "" , "1" , "54H" , "7" , "0" , "00" , "00" , "N" , "" , "N" , "N");
    top.incmTypes[46]  = new IncomeType("3" , "52" , "71  大陸地區信託營利所得" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "所得總額" , "" , "1" , "54H" , "8" , "0" , "00" , "00" , "N" , "G" , "N" , "N");
    top.incmTypes[47]  = new IncomeType("5" , "1" , "51 房屋[採標準費用率43%]" , "出租房屋稅籍編號與坐落" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "5" , "511" , "" , "43" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[48]  = new IncomeType("5" , "2" , "51 房屋(逐項舉證費用)" , "出租房屋稅籍編號與坐落" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "5" , "512" , "" , "0" , "10" , "21" , "Y" , "" , "N" , "Y");
      top.incmTypes[49]  = new IncomeType("5" , "3" , "51L 土地(僅可扣除地價稅)" , "出租土地之地址" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "5" , "51L" , "" , "0" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[50]  = new IncomeType("5" , "31" , "51L 信託土地租賃" , "出租土地之地址" , "扣繳單位統一編號" , "" , "" , "所得總額" , "扣繳稅額" , "5" , "51L" , "" , "0" , "10" , "21" , "N" , "T" , "N" , "N");
    top.incmTypes[51]  = new IncomeType("5" , "4" , "51 押金(按照年息1.37%之利率計算租賃收入)[43%]" , "出租房屋稅籍編號與坐落" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "" , "5" , "514" , "" , "43" , "00" , "00" , "Y" , "" , "Y" , "Y");
    top.incmTypes[52]  = new IncomeType("5" , "6" , "51 押金(按照年息1.37%之利率計算租賃收入)[逐項列舉費用]" , "出租房屋稅籍編號與坐落" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "" , "5" , "515" , "" , "0" , "00" , "00" , "Y" , "" , "Y" , "N");
    top.incmTypes[53]  = new IncomeType("5" , "10" , "51 財產出典所取得之典價(按照年息1.37%之利率計算租賃收入)" , "出典財產稅籍編號或坐落" , "" , "收入總額" , "" , "所得總額" , "" , "5" , "516" , "" , "0" , "00" , "00" , "Y" , "" , "Y" , "N");
    top.incmTypes[54]  = new IncomeType("5" , "7" , "51 信託財產租賃所得" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "所得總額" , "扣繳稅額" , "5" , "511" , "" , "0" , "00" , "00" , "N" , "T" , "N" , "N");
    top.incmTypes[55]  = new IncomeType("5" , "12" , "51P信託財產租賃所得（有價證券借貸轉開憑單 ）" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "所得總額" , "扣繳稅額" , "5" , "51P" , "" , "0" , "00" , "00" , "N" , "T" , "N" , "N");
    top.incmTypes[56]  = new IncomeType("5" , "8" , "51K 債券租借" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "5" , "51K" , "" , "0" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[57]  = new IncomeType("5" , "81" , "51K 信託債券租借" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "所得總額" , "扣繳稅額" , "5" , "51K" , "" , "0" , "10" , "21" , "N" , "T" , "N" , "N");
    top.incmTypes[58]  = new IncomeType("5" , "5" , "51I 其他－非固定資產" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "5" , "51I" , "" , "0" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[59]  = new IncomeType("5" , "51" , "51I 信託非固定資產租賃" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "所得總額" , "扣繳稅額" , "5" , "51I" , "" , "0" , "10" , "21" , "N" , "T" , "N" , "N");
    top.incmTypes[60] = new IncomeType("5" , "11" , "51J 其他－固定資產（採標準費用率43%）" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "" , "所得總額" , "扣繳稅額" , "5" , "51J" , "1" , "43" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[61] = new IncomeType("5" , "9" , "51J 其他－固定資產(逐項舉證費用)" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "" , "所得總額" , "扣繳稅額" , "5" , "51J" , "2" , "0" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[62] = new IncomeType("5" , "93" , "51J 信託固定資產租賃" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "所得總額" , "扣繳稅額" , "5" , "51J" , "2" , "0" , "10" , "21" , "N" , "T" , "N" , "N");
    top.incmTypes[63] = new IncomeType("5" , "91" , "74大陸地區租賃所得" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "" , "5" , "541" , "" , "0" , "00" , "00" , "Y" , "" , "N" , "N");
    top.incmTypes[64] = new IncomeType("5" , "92" , "74大陸地區信託租賃所得" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "所得總額" , "" , "5" , "542" , "" , "0" , "00" , "00" , "N" , "G" , "N" , "N");
    top.incmTypes[65] = new IncomeType("D" , "1" , "53 權利金所得（自行列舉必要費用及成本）" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "5" , "53" , "" , "0" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[66] = new IncomeType("D" , "2" , "53 專利權、專門技術權利金所得(採標準費用率30%)" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "5" , "531" , "" , "30" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[67] = new IncomeType("D" , "3" , "53權利金所得－技術授權取得認股權憑證（自行列舉必要費用及成本）" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "5" , "53Q" , "1" , "0" , "00" ,"00" , "Y" , "" , "N" , "N");
    top.incmTypes[68] = new IncomeType("D" , "4" , "53 權利金所得－技術授權取得認股權憑證（採標準費用率30﹪）" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "5" , "53Q" , "2" , "30" ,"00" ,"00" , "Y" , "" , "N" , "N");
    top.incmTypes[69] = new IncomeType("D" , "5" , "53權利金所得－技術授權取得股份符合促產19之2者（自行列舉必要費用成本）" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "5" , "53R" , "1" , "0" ,"00" ,"00" , "Y" , "" , "N" , "N");
    top.incmTypes[70] = new IncomeType("D" , "6" , "53權利金所得－技術授權取得股份符合促產19之2者（採標準費用率30﹪）" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "5" , "53R" , "2" , "30" ,"00" ,"00" , "Y" , "" , "N" , "N");
    top.incmTypes[71] = new IncomeType("D" , "7" , "53 信託財產權利金所得" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "所得總額" , "扣繳稅額" , "5" , "53" , "" , "0" , "00" , "00" , "N" , "T" , "N" , "N");
    top.incmTypes[72] = new IncomeType("D" , "91" , "74大陸地區權利金所得" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , ""  , "5" , "543" , "" , "0" , "00" , "00" , "Y" , "" , "N" , "N");
    top.incmTypes[73] = new IncomeType("D" , "92" , "74大陸地區信託權利金所得" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "所得總額" , "" , "5" , "544" , "" , "0" , "00" , "00" , "N" , "G" , "N" , "N");
    top.incmTypes[74] = new IncomeType("6" , "1" , "75 必要費用及成本" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "" , "6" , "75" , "S" , "0" , "00" , "00" , "Y" , "" , "N" , "N");
    top.incmTypes[75] = new IncomeType("6" , "2" , "75 標準[100%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "" , "6" , "75A" , "S" , "100" , "00" , "00" , "Y" , "" , "N" , "N");
    top.incmTypes[76] = new IncomeType("6" , "3" , "75大陸地區自力耕作、漁、牧、林、礦所得" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , ""  , "6" , "75B" , "" , "0" , "00" , "00" , "Y" , "" , "N" , "N");
    top.incmTypes[77] = new IncomeType("7" , "1" , "9A 自行列舉必要費用及成本" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9A0" , "" , "0" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[78] = new IncomeType("7" , "2" , "9A-10,11 律師、會計師[費用率標準30%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9A1" , "" , "30" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[79] = new IncomeType("7" , "30" , "9A-12 精算師[費用率標準20%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9AT" , "" , "20" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[80] = new IncomeType("7" , "6" , "9A-13 地政士[費用率標準30%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9A5" , "" , "30" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[81] = new IncomeType("7" , "35" , "9A-14,19,23 記帳士、記帳及報稅代理人或未具會計師資格者[費用率標準30%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9AW" , "" , "30" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[82] = new IncomeType("7" , "33" , "9A-15 仲裁人[費用率標準15%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9AU" , "" , "15" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[83] = new IncomeType("7" , "41" , "9A-16 依公證法規定之民間公證人[費用率標準30%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9AX" , "" , "30" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[84] = new IncomeType("7" , "42" , "9A-17 不動產估價師[費用率標準35%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9A0" , "6" , "35" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[85] = new IncomeType("7" , "60" , "9A-18 受委託代辦國有非公用不動產之承租、繼承等業務申請者[費用率標準30%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9A2" , "3" , "30" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[86] = new IncomeType("7" , "45" , "9A-20 技師[費用率標準35%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9A9" , "" , "35" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[87] = new IncomeType("7" , "3" , "9A-21建築師[費用率標準35%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9A2" , "" , "35" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[88] = new IncomeType("7" , "39" , "9A-22 公共安全檢查人員[費用率標準35%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9A0" , "4" , "35" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[89] = new IncomeType("7" , "25" , "9A-24 工匠工資收入[費用率標準20%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9AO" , "" , "20" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[90] = new IncomeType("7" , "26" , "9A-25 工匠工料收入[費用率標準62%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9AP" , "" , "62" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[91] = new IncomeType("7" , "29" , "9A-26 引水人[費用率標準25%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9AS" , "" , "25" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[92] = new IncomeType("7" , "17" , "9A-31,33,38 西醫師外科、婦產科或骨科(一般收入含藥費) [費用率標準45%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9AY" , "" , "45" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[93] = new IncomeType("7" , "16" , "9A-30,32 西醫師內科.小兒科[費用率標準40%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9AF" , "" , "40" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[94] = new IncomeType("7" , "48" , "9A-34,35 西醫師眼科.耳鼻喉科[費用率標準40%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9AF" , "1" , "40" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[95] = new IncomeType("7" , "49" , "9A-36,48,49 西醫師牙科.皮膚科.家庭醫學科[費用率標準40%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9AF" , "2" , "40" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[96] = new IncomeType("7" , "18" , "9A-37 西醫師精神病科(一般收入含藥費) [費用率標準46%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9AG" , "" , "46" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[97] = new IncomeType("7" , "19" , "9A-39 西醫師其他科別(一般收入含藥費) [費用率標準43%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9AH" , "" , "43" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[98] = new IncomeType("7" , "20" , "9A 西醫師各科(掛號費收入)[費用率標準78%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9AI" , "1" , "78" , "00" , "00" , "Y" , "" , "N" , "N");
    top.incmTypes[99] = new IncomeType("7" , "61" , "9A 西醫師各科(全民健保收入、部分負擔)[費用率標準依健保險署核定點數每點0.78元]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "" , "2" , "9AI" , "2" , "00" , "00" , "00" , "Y" , "" , "Y" , "Y");
    top.incmTypes[100]= new IncomeType("7" , "84" , "9A 西醫師各科(依全民健康保險醫療資源不足地區改善方案所訂保障額度補足差額之收入)[費用率標準78%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "" , "2" , "9AI" , "5" , "78" , "00" , "00" , "Y" , "" , "N" , "Y");
    top.incmTypes[101]= new IncomeType("7" , "4" , "9A-40 助產師(士)[費用率標準31%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9A3" , "" , "31" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[102]= new IncomeType("7" , "5" , "9A-40 助產師(士)(全民健保收入)[費用率標準72%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9A4" , "" , "72" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[103]= new IncomeType("7" , "11" , "9A-41 藥師[費用率標準20%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9AA" , "" , "20" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[104]= new IncomeType("7" , "12" , "9A-41 藥師(全民健保收入、部分負擔-含藥費)[費用率標準94%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "" , "2" , "9AB" , "" , "94" , "00" , "00" , "Y" , "" , "N" , "N");
    top.incmTypes[105]= new IncomeType("7" , "72" , "9A-41藥師(全民健康保險收入已區分藥費收入及藥事服務費收入者-藥費)[費用率標準100%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9AA" , "1" , "100" , "00" , "00" , "Y" , "" , "Y" , "Y");
    top.incmTypes[106]= new IncomeType("7" , "73" , "9A-41藥師(全民健康保險收入已區分藥費收入及藥事服務費收入者-藥事服務費)[費用率標準20%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9AA" , "2" , "20" , "10" , "00" , "Y" , "" , "Y" , "Y");
    top.incmTypes[107]= new IncomeType("7" , "24" , "9A-42 醫事檢驗師(生)[費用率標準43%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9AN" , "" , "43" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[108]= new IncomeType("7" , "47" , "9A-42 醫事檢驗師(掛號費收入)[費用率標準78%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9A1" , "2" , "78" , "00" , "00" , "Y" , "" , "N" , "N");
    top.incmTypes[109]= new IncomeType("7" , "64" , "9A-42 醫事檢驗師(全民健保收入、部分負擔)[費用率標準依健保署核定點數每點0.78元]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "" , "2" , "9A1" , "7" , "00" , "00" , "00" , "Y" , "" , "Y" , "Y");
    top.incmTypes[110]= new IncomeType("7" , "67" , "9A-45 營養師[費用率標準20%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9A2" , "5" , "20" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[111]= new IncomeType("7" , "79" , "9A-46醫師報經核准至不具僱傭關係之他醫療機構從事醫療業務收入[費用率標準10%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9AI" , "4" , "10" , "10" , "21" , "Y" , "" , "N" , "Y");
    top.incmTypes[112]= new IncomeType("7" , "22" , "9A-47 獸醫師醫療貓、狗[費用率標準32%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9AL" , "" , "32" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[113]= new IncomeType("7" , "23" , "9A-47 獸醫師其他[費用率標準40%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9AM" , "" , "40" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[114]= new IncomeType("7" , "13" , "9A    中西醫師診費不含藥費(一般收入)[費用率標準20%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9AC" , "" , "20" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[115]= new IncomeType("7" , "83" , "9A 中醫師(依全民健康保險醫療資源不足地區改善方案所訂保障額度補足差額之收入)[費用率標準78%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "" , "2" , "9AE" , "3" , "78" , "00" , "00" , "Y" , "" , "N" , "Y");
    top.incmTypes[116]= new IncomeType("7" , "14" , "9A-50 中醫師診費含藥費(一般收入) [費用率標準45%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9AD" , "" , "45" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[117]= new IncomeType("7" , "15" , "9A-50 中醫師(掛號費收入)[費用率標準78%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9AE" , "1" , "78" , "00" , "00" , "Y" , "" , "N" , "N");
    top.incmTypes[118]= new IncomeType("7" , "54" , "9A-51 語言治療師（全民健康保險收入、部分負擔）[費用率標準依健保署核定點數每點0.78元]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "" , "2" , "9A2" , "9" , "78" , "00" , "00" , "Y" , "" , "Y" , "Y");
    top.incmTypes[119]= new IncomeType("7" , "55" , "9A-51 語言治療師（掛號費收入）[費用率標準78%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9A2" , "A" , "78" , "00" , "00" , "Y" , "" , "N" , "N");
    top.incmTypes[120]= new IncomeType("7" , "56" , "9A-51 語言治療師（非屬全民健康保險收入）【費用率標準20%】" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9A2" , "B" , "20" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[121]= new IncomeType("7" , "62" , "9A-50 中醫師(全民健康保險收入、部分負擔)[費用率標準依健保署核定點數每點0.78元]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "" , "2" , "9AE" , "2" , "00" , "00" , "00" , "Y" , "" , "Y" , "Y");
    top.incmTypes[122]= new IncomeType("7" , "46" , "9A-52 西醫師人壽保險檢查收入[費用率標準35%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9A1" , "1" , "35" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[123]= new IncomeType("7" , "63" , "9A-53物理治療師(全民健康保險收入、部分負擔)[費用率標準依健保署核定點數每點0.78元]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "" , "2" , "9A1" , "6" , "00" , "00" , "00" , "Y" , "" , "Y" , "Y");
    top.incmTypes[124]= new IncomeType("7" , "53" , "9A-53 物理治療師(非屬全民健康保險收入)[費用率標準43%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9A1" , "5" , "43" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[125]= new IncomeType("7" , "52" , "9A-53 物理治療師(掛號費收入)[費用率標準78%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9A1" , "4" , "78" , "00" , "00" , "Y" , "" , "N" , "N");
    top.incmTypes[126]= new IncomeType("7" , "66" , "9A-54 職能治療師(全民健保收入、部分負擔)[費用率標準依健保署核定點數每點0.78元]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "" , "2" , "9A2" , "7" , "00" , "00" , "00" , "Y" , "" , "Y" , "Y");
    top.incmTypes[127]= new IncomeType("7" , "68" , "9A-54 職能治療師(掛號費收入)[費用率標準78%]    " , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9A2" , "6" , "78" , "00" , "00" , "Y" , "" , "N" , "N");
    top.incmTypes[128]= new IncomeType("7" , "69" , "9A-54 職能治療師(非屬全民健康保險收入)[費用率標準43%]    " , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9A2" , "4" , "43" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[129]= new IncomeType("7" , "71" , "9A-55 心理師[費用率標準20%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9A2" , "8" , "20" , "10" , "21" , "Y" , "" , "N" , "Y");
    top.incmTypes[130]= new IncomeType("7" , "76" , "9A-56牙體技術師（生）[費用率標準40%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9A3" , "1" , "40" , "10" , "21" , "Y" , "" , "N" , "Y");
    top.incmTypes[131]= new IncomeType("7" , "78" , "9A-57配合政府政策辦理老人、中低收入者及身障者補助裝置假牙計畫收入[費用率標準78%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9AI" , "3" , "78" , "10" , "21" , "Y" , "" , "N" , "Y");
    top.incmTypes[132]= new IncomeType("7" , "7" , "9A-61 書畫家、版畫家[費用率標準30%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9A6" , "" , "30" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[133]= new IncomeType("7" , "28" , "9A-62 命理卜卦[費用率標準20%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9AR" , "" , "20" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[134]= new IncomeType("7" , "10" , "9A-70 表演人（演員、歌手、模特兒、節目主持人、舞蹈、相聲等及其他表演人）[費用率標準45%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9A0" , "9" , "45" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[135]= new IncomeType("7" , "8" , "9A-71 保險經紀人[費用率標準26%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9A7" , "" , "26" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[136]= new IncomeType("7" , "27" , "9A-72 節目製作人[費用率標準45%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9AQ" , "" , "45" , "10" , "21" , "Y" , "" , "N" , "N" );
    top.incmTypes[137]= new IncomeType("7" , "74" , "9A-73公益彩券甲類經銷商[費用率標準60%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9AQ" , "1" , "60" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[138]= new IncomeType("7" , "9" , "9A-76 一般經紀人（如多層次傳銷事業參加人等）[費用率標準20%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9A8" , "" , "20" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[139]= new IncomeType("7" , "51" , "9A-90 其他[自行列舉必要費用及成本]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9A1" , "3" , "00" , "00" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[140]= new IncomeType("7" , "31" , "9A-91 商標代理人[費用率標準30%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9AZ" , "" , "30" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[141]= new IncomeType("7" , "50" , "9A-92 程式設計師[費用率標準20%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9AT" , "1" , "20" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[142]= new IncomeType("7" , "32" , "9A-93 專利代理人[費用率標準30%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9A0" , "1" , "30" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[143]= new IncomeType("7" , "34" , "9A-94 未具律師資格，辦理訴訟代理人業務[費用率標準23%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9AV" , "" , "23" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[144]= new IncomeType("7" , "36" , "9A-95 未具建築師資格，辦理建築規劃設計及監造等業務[費用率標準35%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9A0" , "2" , "35" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[145]= new IncomeType("7" , "44" , "9A-96 未具地政士資格，辦理土地登記等業務[費用率標準30%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9A0" , "8" , "30" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[146]= new IncomeType("7" , "38" , "9A-97 受大陸地區人民委託辦理繼承公法給付或其他事務者[費用率標準23%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9A0" , "3" , "23" , "00" , "00" , "Y" , "" , "N" , "N");
    top.incmTypes[147]= new IncomeType("7" , "85" , "9A一財政部頒定費用標準核定並已使用執行業務暨其他所得電子申報系統上傳收入明細" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "" , "2" , "9AZ" , "1" , "0" , "00" , "00" , "Y" , "" , "N" , "N");
    top.incmTypes[148]= new IncomeType("7" , "86" , "9A-利息所得" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "所得總額" , "扣繳稅額" , "2" , "9AZ" , "2" , "0" , "00" , "00" , "N" , "" , "N" , "N");
    top.incmTypes[149]= new IncomeType("7" , "87" , "72  大陸地區執行業務所得" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "" , "2" , "9AX" , "1" , "0" , "00" , "00" , "Y" , "" , "N" , "N");

    top.incmTypes[150]= new IncomeType("8" , "1" , "9B-98 著作人非自行出版者[費用率標準30%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9B1" , "" , "30" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[151]= new IncomeType("8" , "2" , "9B 自行列舉必要費用及成本" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9B2" , "" , "0" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[152]= new IncomeType("8" , "3" , "9B-99 著作人自行出版者[費用率標準75%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "2" , "9B3" , "" , "75" , "10" , "21" , "Y" , "" , "N" , "N");

    getProptyExWasTp();

    top.incmTypes[240] = new IncomeType("A" , "1" , "91 競技、競賽及機會中獎獎金" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "8" , "91" , "" , "0" , "10" , "21" , "Y" , "" , "N" , "N");
    top.incmTypes[241] = new IncomeType("A" , "2" , "91 信託財產競技、競賽及機會中獎獎金" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "所得總額" , "扣繳稅額" , "8" , "91" , "" , "0" , "00" , "00" , "N" , "T" , "N" , "N");
    top.incmTypes[242] = new IncomeType("A" , "3" , "91大陸地區競技、競賽獎金及機會中獎獎金" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , ""  , "8" , "92" , "" , "0" , "00" , "00" , "Y" , "" , "N" , "N");
    top.incmTypes[243] = new IncomeType("A" , "4" , "91大陸地區信託競技、競賽獎金及機會中獎獎金" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "所得總額" , "" , "8" , "93" , "" , "0" , "00" , "00" , "N" , "G" , "N" , "N");
    top.incmTypes[244] = new IncomeType("B" , "1" , "93 退職所得" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "所得總額" , "扣繳稅額" , "9" , "93" , "" , "" , "10" , "21" , "N" , "" , "N" , "N");
    top.incmTypes[245] = new IncomeType("B" , "2" , "93大陸地區退職所得" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "所得總額" , "" , "9" , "94" , "" , "0" , "00" , "00" , "N" , "" , "N" , "N");
    top.incmTypes[246] = new IncomeType("C" , "1" , "77 自行列舉必要費用及成本" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "A" , "92A" , "" , "0" , "00" , "00" , "Y" , "" , "N" , "N");
    top.incmTypes[247] = new IncomeType("C" , "2" , "77 民營汽車駕駛人訓練機構[費用率標準65%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "A" , "92B" , "" , "65" , "00" , "00" , "Y" , "" , "N" , "N");
    top.incmTypes[248] = new IncomeType("C" , "3" , "77 補習班[費用率標準50%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "A" , "92C" , "" , "50" , "00" , "00" , "Y" , "" , "N" , "N");
    top.incmTypes[249] = new IncomeType("C" , "4" , "77 私立托嬰中心、幼兒園[費用率標準80%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "A" , "92D" , "" , "80" , "00" , "00" , "Y" , "" , "N" , "N");
    top.incmTypes[250] = new IncomeType("C" , "5" , "77 兒童課後照顧服務中心[費用率標準60%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "A" , "92E" , "" , "60" , "00" , "00" , "Y" , "" , "N" , "N");
    top.incmTypes[251] = new IncomeType("C" , "6" , "77 私立養護、療養院所[費用率標準75%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "A" , "92F" , "" , "75" , "00" , "00" , "Y" , "" , "N" , "N");
    top.incmTypes[252] = new IncomeType("C" , "8" , "77 依護理(老人福利、精神復健)機構設置標準設置之機構[費用率標準85%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "A" , "92H" , "" , "85" , "00" , "00" , "Y" , "" , "N" , "N");
    top.incmTypes[253] = new IncomeType("C" , "16" , "77 其他所得-含私立養護、療養院（所）、護理機構及生技新藥公司高階專業人員(自行列舉必要費用及成本)" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "A" , "92I" , "" , "0" , "0" , "00" , "Y" , "" , "N" , "N");
    top.incmTypes[254] = new IncomeType("C" , "9" , "94 員工認股所得" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "" , "所得總額" , "扣繳稅額" , "A" , "94" , "" , "0" , "00" , "00" , "Y" , "" , "N" , "N");
    top.incmTypes[255] = new IncomeType("C" , "11" , "94 信託財產員工認股所得" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "所得總額" , "扣繳稅額" , "A" , "94" , "" , "0" , "00" , "00" , "N" , "T" , "N" , "N");
    top.incmTypes[256] = new IncomeType("C" , "7" , "92 其他所得（例如：福利金、違約金、佃農因終止三七五租約取得之補償費及其他）。" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "所得總額" , "扣繳稅額" , "A" , "92G" , "" , "0" , "00" , "00" , "F" , "" , "N" , "N");
    top.incmTypes[257] = new IncomeType("C" , "10" , "92 信託其他所得" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "所得總額" , "扣繳稅額" , "A" , "92G" , "" , "0" , "00" , "00" , "N" , "T" , "N" , "N");
    top.incmTypes[258] = new IncomeType("C" , "18" , "92P信託財產其他所得（有價證券借貸轉開憑單） " , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "所得總額" , "扣繳稅額" , "A" , "92P" , "" , "0" , "00" , "00" , "N" , "T" , "N" , "N");
    top.incmTypes[259] = new IncomeType("C" , "12" , "92 其他所得(個人遷讓非自有房屋、土地所取得之補償金)[費用率50%]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "A" , "92G" , "2" , "50" , "00" , "00" , "Y" , "" , "N" , "N");
    top.incmTypes[260] = new IncomeType("C" , "13" , "92 其他所得（個人遷讓非自有房屋、土地所取得之補償金）[自行列舉必要費用及成本]" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "A" , "92G" , "3" , "0" , "00" , "00" , "Y" , "" , "N" , "N");
    top.incmTypes[261] = new IncomeType("C" , "14" , "95A 實報實銷之政府補助款" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "A" , "95A" , "" , "0" , "00" , "00" , "Y" , "" , "N" , "N");
    top.incmTypes[262] = new IncomeType("C" , "15" , "95B 非實報實銷之政府補助款" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "扣繳稅額" , "A" , "95B" , "" , "0" , "00" , "00" , "Y" , "" , "N" , "N");
    top.incmTypes[263] = new IncomeType("C" , "17" , "97 受贈所得" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "所得總額" , "扣繳稅額" , "A" , "97" , "" , "" , "0" , "00" , "N" , "" , "N" , "N");
    top.incmTypes[264] = new IncomeType("C" , "91" , "77大陸地區其他所得" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "" , "A" , "95" , "" , "0" , "00" , "00" , "Y" , "" , "N" , "N");
    top.incmTypes[265] = new IncomeType("C" , "92" , "77大陸地區信託其他所得" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "所得總額" , "" , "A" , "96" , "" , "0" , "00" , "00" , "N" , "G" , "N" , "N");
}

function IncomeBasType(kind, type, subtype, name, LOSN, BAN, RVNU_AMT,
        INCM_AMT, COST, MEMO, incm_cn, incm_fmt, incm_no, readonly, fromDeuct,
        cost, noShowIDN,level) {

    this.kind = kind; //1 所得類別
    this.type = type; //2 所得格式\
    this.subtype = subtype; //3 所得格式
    this.name = name;  //4
    this.LOSN = LOSN; // 5 所得發生處所
    this.BAN = BAN; //6 所得發生處所統一編號
    this.RVNU_AMT = RVNU_AMT; //7 收入總額
    this.INCM_AMT = INCM_AMT; //8 所得額
    this.COST = COST; //9 必要費用及成本
    this.MEMO = MEMO; //10 備註
    this.incm_cn = incm_cn; //11
    this.incm_fmt = incm_fmt; //12
    this.incm_no = incm_no; //13
    this.readonly = readonly; //14
    this.fromDeuct = fromDeuct; //15
    this.cost = cost;//16 扣繳率
    this.noShowIDN = noShowIDN; //17
    this.level = level;  //18 2 第二層 3 第三層
}

function makeIncomeBasTypes() {
    top.incmBasTypes[0]  = new IncomeBasType("1","1" , "" , "非死亡給付",                                               "所得發生處所名稱", "所得發生處所統一編號", ""        , "所得總額", "", "保單號碼", "A", "78", "", "", "N", "0", "N","2");
    top.incmBasTypes[1]  = new IncomeBasType("1","2" , "" , "死亡給付"  ,                                               "所得發生處所名稱", "所得發生處所統一編號", "給付金額", "所得總額", "", "保單號碼", "A", "78D", "","readonly", "N", "0", "N","2");
// 2014.01.15 adj 根據證所稅需求(所得格式)，移除序號3~5等基本稅額  by 6071
//    top.incmBasTypes[2]  = new IncomeBasType("2","1" , "" , "未上市未上櫃及非屬興櫃股票交易--有成交價格有原始取得成本", "所得發生處所名稱", "所得發生處所統一編號", "收入總額","所得﹝損失﹞額", "必要費用及成本", "成本認定法", "7", "76S", "", "readonly", "N","0", "N","2");
//    top.incmBasTypes[3]  = new IncomeBasType("2","2" , "" , "未上市未上櫃及非屬興櫃股票交易--有成交價格無原始取得成本", "所得發生處所名稱", "所得發生處所統一編號", "收入總額","所得﹝損失﹞額", "必要費用及成本", "成本認定法", "7", "76S", "1", "readonly", "N","80", "N","2");
//    top.incmBasTypes[4]  = new IncomeBasType("2","3" , "" , "未上市未上櫃及非屬興櫃股票交易--無成交價格",               "所得發生處所名稱", "所得發生處所統一編號", "收入總額","所得﹝損失﹞額", "必要費用及成本", "成本認定法", "7", "76S", "2", "readonly", "N","25", "N","2");
    top.incmBasTypes[2]  = new IncomeBasType("2","4" , "" , "私募證券投資信託基金之受益憑證--有成交價格有原始取得成本", "所得發生處所名稱", "所得發生處所統一編號", "收入總額","所得﹝損失﹞額", "必要費用及成本", "成本認定法", "7", "76V", "", "readonly", "N","0", "N","2");
    top.incmBasTypes[3]  = new IncomeBasType("2","5" , "" , "私募證券投資信託基金之受益憑證--有成交價格無原始取得成本", "所得發生處所名稱", "所得發生處所統一編號", "收入總額","所得﹝損失﹞額", "必要費用及成本", "成本認定法", "7", "76V", "1", "readonly", "N","80", "N","2");
    top.incmBasTypes[4]  = new IncomeBasType("2","6" , "" , "私募證券投資信託基金之受益憑證--無成交價格"              , "得發生處所名稱"  , "所得發生處所統一編號", "收入總額","所得﹝損失﹞額", "必要費用及成本", "成本認定法", "7", "76V", "2", "readonly", "N","25", "N","2");
    top.incmBasTypes[5]  = new IncomeBasType("3","1" , "" , "捐贈(以土地對政府之捐贈)"                                , ""                , ""                    , ""        , "可扣除金額"   , "", "扣除金額", "", "", "YH", "readonly", "Y", "0","Y","2");
    top.incmBasTypes[6]  = new IncomeBasType("3","2" , "" , "捐贈實物(對政府之捐贈、國防、勞軍、古績)"                , ""                , ""                    , ""        , "可扣除金額"   , "", "扣除金額", "", "", "YJ", "readonly", "Y", "0", "Y","2");
    top.incmBasTypes[7] = new IncomeBasType("3","3" , "" , "捐贈實物(一般)"                                          , ""                , ""                    , ""        , "可扣除金額"   , "", "扣除金額", "", "", "ZZ", "readonly", "Y", "0", "Y","2");
    top.incmBasTypes[8] = new IncomeBasType("3","4" , "" , "其他已申報列舉扣除之非現金捐贈"                          , ""                , ""                    , ""        , "可扣除金額"   , "", "扣除金額", "", "", "QQ", "", "N", "0", "N","2");
    top.incmBasTypes[9] = new IncomeBasType("4","1" , "" , "員工分紅配股"                                            , "所得發生處所名稱", "所得發生處所統一編號", "可處分日次日之股票時價總金額", "所得額", "股票面額總金額","扣繳稅額", "3", "50E", "", "readonly", "N", "0", "N","2");
    top.incmBasTypes[10] = new IncomeBasType("5","1" , "" , "以前年度有價證券交易損失扣除額"                          , ""                , "", "", "以前年度之有價證券交易損失扣除金額", "", "", "", "", "XX", "", "N","0", "Y","2");
    top.incmBasTypes[11] = new IncomeBasType("6","12" , "" , "取得所得來源地稅務機關核發納稅證明"                     , "所得來源國家"              , "", "", "核定所得額", "", "", "A", "77", "", "", "N","0", "N","2");
    top.incmBasTypes[12] = new IncomeBasType("6","1" ,"", "薪資所得"                                                  , "所得來源國家或給付單位名稱", "", "", "所得總額"  , "", "", "3", "50", "", "", "N", "0", "N","2");
    top.incmBasTypes[13] = new IncomeBasType("6","2" , "" , "利息所得"                                                , ""                , "", "", "", "", "", "", "", "", "", "", "", "","2");
    top.incmBasTypes[14] = new IncomeBasType("6","2" ,"S0", "利息所得"                                                , "所得來源國家或給付單位名稱", "", "", "所得總額", "", "", "4", "73", "", "", "N", "0", "N","3");
    top.incmBasTypes[15] = new IncomeBasType("6","2" ,"F0", "信託利息所得"                                            , "所得來源國家或給付單位名稱", "", "", "所得總額", "", "", "4", "73", "", "", "N", "0", "N","3");
    top.incmBasTypes[16] = new IncomeBasType("6","3" , "" , "營利所得"                                                , ""                , "", "", "", "", "", "", "", "", "", "", "", "","2");
    top.incmBasTypes[17] = new IncomeBasType("6","3" ,"S0", "營利所得"                                                , "所得來源國家或給付單位名稱", "", "", "所得總額", "", "", "1", "71", "1", "", "N", "0", "N","3");
    top.incmBasTypes[18] = new IncomeBasType("6","3" ,"S1", "獲配被投資事業分配之股利、盈餘總額"                      , "所得來源國家或給付單位名稱", "", "", "所得總額", "", "", "1", "71", "2", "", "N", "0", "N","3");
    top.incmBasTypes[19] = new IncomeBasType("6","3" ,"S2", "個人一時貿易之盈餘"                                      , "所得來源國家或給付單位名稱", "", "收入總額", "所得總額", "必要費用及成本", "", "1", "71", "3", "", "N", "94", "N","3");
    top.incmBasTypes[20] = new IncomeBasType("6","3" ,"F0", "信託營利所得"                                            , "所得來源國家或給付單位名稱", "", "", "所得總額", "", "", "1", "71", "", "", "N", "0", "N","3");
    top.incmBasTypes[21] = new IncomeBasType("6","11", "" , "租賃所得"                                                , ""                , "", "", "", "", "", "", "", "", "", "", "", "","2");
    top.incmBasTypes[22] = new IncomeBasType("6","11","S0", "自行列舉必要費用成本"                                    , "所得來源國家或給付單位名稱", "", "收入總額", "所得總額", "必要費用及成本", "", "5", "74", "1", "", "N", "0", "N","3");
    top.incmBasTypes[23] = new IncomeBasType("6","11","S1", "房屋(採標準費用率43﹪)"                                  , "所得來源國家或給付單位名稱", "", "收入總額", "所得總額", "必要費用及成本", "" ,"5", "74", "2", "readonly", "N", "43", "N","3");
    top.incmBasTypes[24] = new IncomeBasType("6","11","S2", "其他固定資產（採標準費用率43%）"                         , "所得來源國家或給付單位名稱", "", "收入總額", "所得總額", "必要費用及成本", "", "5", "74", "3", "", "N", "43", "N","3");
    top.incmBasTypes[25] = new IncomeBasType("6","11","S3", "收受押金或取得典價按當地一年期存款利率設算之租賃所得"    , "所得來源國家或給付單位名稱", "", "收入總額", "所得總額", "必要費用及成本", "", "5", "74", "4", "", "N", "0", "N","3");
    top.incmBasTypes[26] = new IncomeBasType("6","11","F0", "信託租賃所得"                                            , "所得來源國家或給付單位名稱", "", "", "所得總額", "", "", "5", "74", "", "", "N", "0", "N","3");
    top.incmBasTypes[27] = new IncomeBasType("6","4" , "" , "權利金所得"                                              , ""                , "", "", "", "", "", "", "", "", "", "", "", "","2");
    top.incmBasTypes[28] = new IncomeBasType("6","4" ,"S0", "自行列舉必要費用成本"                                    , "所得來源國家或給付單位名稱", "", "收入總額", "所得總額", "必要費用及成本", "", "5", "74", "5", "", "N", "0", "N","3");
    top.incmBasTypes[29] = new IncomeBasType("6","4" ,"S2", "專利權或技術授權-取得現金或公司股份金額（自行列舉必要費用成本）"                                                , "所得來源國家或給付單位名稱", "", "收入總額", "所得總額", "必要費用及成本", "", "5", "74", "6", "", "N", "0", "N","3");
    top.incmBasTypes[30] = new IncomeBasType("6","4" ,"S3", "專利權或技術授權-取得現金或公司股份金額（採標準費用率30%）"                                                , "所得來源國家或給付單位名稱", "", "收入總額", "所得總額", "必要費用及成本", "", "5", "74", "7", "", "N", "30", "N","3");
    top.incmBasTypes[31] = new IncomeBasType("6","4" ,"S4", "專利權或技術授權-取得認股權憑證股票時價超過認股價格之差額（自行列舉必要費用成本）"                                                , "所得來源國家或給付單位名稱", "", "收入總額", "所得總額", "必要費用及成本", "", "5", "74", "8", "", "N", "0", "N","3");
    top.incmBasTypes[32] = new IncomeBasType("6","4" ,"S5", "專利權或技術授權-取得認股權憑證股票時價超過認股價格之差額（採標準費用率30%）"                                                , "所得來源國家或給付單位名稱", "", "收入總額", "所得總額", "必要費用及成本", "", "5", "74", "9", "", "N", "30", "N","3");
    top.incmBasTypes[33] = new IncomeBasType("6","4" ,"F0", "信託權利金所得","所得來源國家或給付單位名稱", "", "", "所得總額", "", "", "5", "74", "", "", "N", "0", "N","3");
    top.incmBasTypes[34] = new IncomeBasType("6","5" ,"",   "自力耕作、漁、牧、林、礦所得","", "", "", "", "", "", "", "", "", "", "", "", "","2");
    top.incmBasTypes[35] = new IncomeBasType("6","5" ,"S0", "自行列舉必要費用成本"                                                , "所得來源國家或給付單位名稱", "", "收入總額", "所得總額", "必要費用及成本", "", "6", "75", "1", "", "N", "0", "N","3");
    top.incmBasTypes[36] = new IncomeBasType("6","5" ,"S1", "採標準費用率100%"                                                , "所得來源國家或給付單位名稱", "", "收入總額", "所得總額", "必要費用及成本", "", "6", "75", "2", "", "N", "100", "N","3");
    top.incmBasTypes[37] = new IncomeBasType("6","6" ,"", "執行業務所得","", "", "", "", "", "", "", "", "", "", "", "", "","2");
    top.incmBasTypes[38] = new IncomeBasType("6","6" ,"S0", "自行列舉必要費用成本"                                                , "所得來源國家或給付單位名稱", "", "收入總額", "所得總額", "必要費用及成本", "", "2", "72", "1", "", "N", "0", "N","3");
    top.incmBasTypes[39] = new IncomeBasType("6","6" ,"S1", "其他依據部頒中華民國各執業類別費用率標準"                                                , "所得來源國家或給付單位名稱", "", "收入總額", "所得總額", "必要費用及成本", "", "2", "72", "2", "", "N", "0", "N","3");
    top.incmBasTypes[40] = new IncomeBasType("6","7" , "" , "財產交易所得","", "", "", "", "", "", "", "", "", "", "", "", "","2");
    top.incmBasTypes[41] = new IncomeBasType("6","7" ,"S0", "出售不動產(自行列舉必要費用成本)","所得來源國家或給付單位名稱", "", "收入總額", "所得總額", "必要費用及成本", "", "7", "76", "1", "", "N", "0", "N","3");
    top.incmBasTypes[42] = new IncomeBasType("6","7" ,"S1", "出售不動產（採標準費用率88﹪）","所得來源國家或給付單位名稱", "", "收入總額", "所得總額", "必要費用及成本", "", "7", "76", "2", "readonly", "N", "88", "N","3");
    top.incmBasTypes[43] = new IncomeBasType("6","7" ,"S2", "買賣境外有價證券、基金受益憑證(自行列舉必要費用成本)","所得來源國家或給付單位名稱", "", "收入總額", "所得總額", "必要費用及成本", "", "7", "76", "3", "", "N", "0", "N","3");
    top.incmBasTypes[44] = new IncomeBasType("6","7" ,"S3", "買賣境外有價證券、基金受益憑證（採標準費用率80﹪）","所得來源國家或給付單位名稱", "", "收入總額", "所得總額", "必要費用及成本", "", "7", "76", "4", "readonly", "N", "80", "N","3");
    top.incmBasTypes[45] = new IncomeBasType("6","7" ,"S6", "專利權或技術讓與-取得現金或公司股份金額（自行列舉必要費用成本）"                                                , "所得來源國家或給付單位名稱", "", "收入總額", "所得總額", "必要費用及成本", "", "7", "76", "5", "", "N", "0", "N","3");
    top.incmBasTypes[46] = new IncomeBasType("6","7" ,"S7", "專利權或技術讓與-取得現金或公司股份金額（採標準費用率30%）"                                                , "所得來源國家或給付單位名稱", "", "收入總額", "所得總額", "必要費用及成本", "", "7", "76", "6", "", "N", "30", "N","3");
    top.incmBasTypes[47] = new IncomeBasType("6","7" ,"S8", "專利權或技術讓與-取得認股權憑證股票時價超過認股價格之差額（自行列舉必要費用成本）"                                                , "所得來源國家或給付單位名稱", "", "收入總額", "所得總額", "必要費用及成本", "", "7", "76", "7", "", "N", "0", "N","3");
    top.incmBasTypes[48] = new IncomeBasType("6","7" ,"S9", "專利權或技術讓與-取得認股權憑證股票時價超過認股價格之差額（採標準費用率30%）"                                                , "所得來源國家或給付單位名稱", "", "收入總額", "所得總額", "必要費用及成本", "", "7", "76", "8", "", "N", "30", "N","3");
    top.incmBasTypes[49] = new IncomeBasType("6","7" ,"S4", "其他(自行列舉必要費用成本)","所得來源國家或給付單位名稱", "", "收入總額", "所得總額", "必要費用及成本", "", "7", "76", "8", "", "N", "0", "N","3");
    top.incmBasTypes[50] = new IncomeBasType("6","7" ,"S5", "其他（採標準費用率80﹪）","所得來源國家或給付單位名稱", "", "收入總額", "所得總額", "必要費用及成本", "", "7", "76", "9", "readonly", "N", "80", "N","3");
    top.incmBasTypes[51] = new IncomeBasType("6","7" ,"F0", "信託財產交易所得","所得來源國家或給付單位名稱", "", "", "所得總額", "", "", "7", "76", "10", "", "N", "0", "N","3");
    top.incmBasTypes[52] = new IncomeBasType("6","8" , "" , "競技、競賽及機會中獎獎金或給與","", "", "", "", "", "", "", "", "", "", "", "", "","2");
    top.incmBasTypes[53] = new IncomeBasType("6","8" ,"S0", "競技、競賽及機會中獎獎金或給與","所得來源國家或給付單位名稱", "", "收入總額", "所得總額", "必要費用及成本", "", "8", "91", "", "", "N", "0", "N","3");
    top.incmBasTypes[54] = new IncomeBasType("6","8" ,"F0", "信託競技、競賽及機會中獎獎金或給與","所得來源國家或給付單位名稱", "", "", "所得總額", "", "", "8", "91", "", "", "N", "0", "N","3");
    top.incmBasTypes[55] = new IncomeBasType("6","9" ,"II", "退職所得","所得來源國家或給付單位名稱", "", "", "所得總額", "", "", "9", "93", "", "", "N", "0", "N","2");
    top.incmBasTypes[56] = new IncomeBasType("6","10", "" , "其他所得","", "", "", "", "", "", "", "", "", "", "", "", "","2");
    top.incmBasTypes[57] = new IncomeBasType("6","10","S0", "其他所得","所得來源國家或給付單位名稱", "", "收入總額", "所得總額", "必要費用及成本", "", "A", "77", "", "", "N", "0", "N","3");
    top.incmBasTypes[58] = new IncomeBasType("6","10","F0", "信託其他所得","所得來源國家或給付單位名稱", "", "", "所得總額", "", "", "A", "77", "", "", "N", "0", "N","3");

}

function ImportIncomeType(kind, incm_cn, incm_fmt, incm_no, Trust_Property,busType) {
    this.kind = kind;
    this.incm_cn = incm_cn;
    this.incm_fmt = incm_fmt;
    this.incm_no = incm_no;
    this.Trust_Property = Trust_Property; // 信託註記
    this.busType = busType; // 業別代號
}

function getTypeDef(kind, type) {
    var typeDef = null;

    for ( var i = 0; i < incomeTypes.length; i++) {
        if (incomeTypes[i].kind) {
            if (incomeTypes[i].type == "" || incomeTypes[i].type == type) {
                typeDef = incomeType[i];
                break;
            }
        }
    }
    return typeDef;
}

function TaxUnit(code, taxName, mail, add, code2, tel) {
    this.code = code;
    this.taxName = taxName;
    this.mail = mail;
    this.add = add;
    this.code2 = code2;
    this.tel = tel;

}

function makeTaxUnit() {
  top.taxUnit[0] =new TaxUnit("A03","財政部臺北國稅局信義分局  ","11049","臺北市信義路５段１５號４樓                  ","北區北臺","02-27201599");
  top.taxUnit[1] =new TaxUnit("A04","財政部臺北國稅局北投稽徵所","11230","臺北市北投區新市街３０號３樓之３            ","北區北臺","02-28951515");
  top.taxUnit[2] =new TaxUnit("A07","財政部臺北國稅局大同稽徵所","10363","臺北市昌吉街５７號３樓之４                  ","北區北臺","02-25853833");
  top.taxUnit[3] =new TaxUnit("A08","財政部臺北國稅局中北稽徵所","10402","臺北市松江路３６７號４樓                    ","北區北臺","02-25024181");
  top.taxUnit[4] =new TaxUnit("A09","財政部臺北國稅局萬華稽徵所","10849","臺北市桂林路５２號３樓                      ","北區北臺","02-23042270");
  top.taxUnit[5] =new TaxUnit("A10","財政部臺北國稅局中正分局  ","10074","臺北市羅斯福路１段８號５樓                  ","北區北臺","02-23965062");
  top.taxUnit[6] =new TaxUnit("A11","財政部臺北國稅局松山分局  ","10410","臺北市南京東路３段１３１號４樓              ","北區北臺","02-27183606");
  top.taxUnit[7] =new TaxUnit("A12","財政部臺北國稅局南港稽徵所","11579","臺北市南港路１段３６０號５樓                ","北區北臺","02-27833151");
  top.taxUnit[8] =new TaxUnit("A13","財政部臺北國稅局文山稽徵所","11606","臺北市木柵路３段２２０號６樓                ","北區北臺","02-22343833");
  top.taxUnit[9] =new TaxUnit("A14","財政部臺北國稅局大安分局  ","10650","臺北市新生南路２段８６號６樓                ","北區北臺","02-23587979");
  top.taxUnit[10]=new TaxUnit("A15","財政部臺北國稅局中南稽徵所","10461","臺北市德惠街１６－５號３樓                  ","北區北臺","02-25868885");
  top.taxUnit[11]=new TaxUnit("A16","財政部臺北國稅局士林稽徵所","11160","臺北市士林區美崙街４３號                    ","北區北臺","02-28315171");
  top.taxUnit[12]=new TaxUnit("A72","財政部臺北國稅局內湖稽徵所","11466","臺北市民權東路６段１１４號５樓及６樓        ","北區北臺","02-27928671");
  top.taxUnit[13]=new TaxUnit("E02","財政部高雄國稅局新興稽徵所","80052","高雄市新興區中正三路３４號８樓              ","南區南臺","07-2367261 ");
  top.taxUnit[14]=new TaxUnit("E03","財政部高雄國稅局鹽埕稽徵所","80341","高雄市鹽埕區大仁路６號６樓                  ","南區南臺","07-5337257 ");
  top.taxUnit[15]=new TaxUnit("E04","財政部高雄國稅局苓雅稽徵所","80251","高雄市苓雅區民權一路８５號８樓              ","南區南臺","07-3302058 ");
  top.taxUnit[16]=new TaxUnit("E06","財政部高雄國稅局鼓山稽徵所","80445","高雄市鼓山區鼓山二路１６６號６樓            ","南區南臺","07-5215258 ");
  top.taxUnit[17]=new TaxUnit("E07","財政部高雄國稅局楠梓稽徵所","81166","高雄市楠梓區楠梓新路２６４號６樓            ","南區南臺","07-3522491 ");
  top.taxUnit[18]=new TaxUnit("E08","財政部高雄國稅局前鎮稽徵所","80656","高雄市前鎮區英德街１５１號                  ","南區南臺","07-7151511 ");
  top.taxUnit[19]=new TaxUnit("E10","財政部高雄國稅局三民分局  ","80787","高雄市三民區大順二路４６８號６樓            ","南區南臺","07-3829211 ");
  top.taxUnit[20]=new TaxUnit("E11","財政部高雄國稅局小港稽徵所","81244","高雄市小港區小港路１５８號６樓              ","南區南臺","07-8123746 ");
  top.taxUnit[21]=new TaxUnit("E12","財政部高雄國稅局左營稽徵所","81346","高雄市左營區左營大路４７９號７樓            ","南區南臺","07-5874709 ");
  top.taxUnit[22]=new TaxUnit("E83","財政部高雄國稅局鳳山分局  ","83003","高雄市鳳山區曹公路５５－１號                ","南區南臺","07-7404001 ");
  top.taxUnit[23]=new TaxUnit("E84","財政部高雄國稅局旗山稽徵所","84243","高雄市旗山區華中街３－１號                  ","南區南臺","07-6612027 ");
  top.taxUnit[24]=new TaxUnit("E85","財政部高雄國稅局岡山稽徵所","82044","高雄市岡山區介壽路１００號                  ","南區南臺","07-6260123 ");
  top.taxUnit[25]=new TaxUnit("C01","財政部北區國稅局基隆分局  ","20402","基隆市安樂區安樂路２段１６２號              ","北區北臺","02-24331900");
  top.taxUnit[26]=new TaxUnit("C02","財政部北區國稅局七堵稽徵所","20644","基隆市七堵區光明路２１號５樓                ","北區北臺","02-24551242");
  top.taxUnit[27]=new TaxUnit("C03","財政部北區國稅局信義稽徵所","20147","基隆市信義區信二路１７６號1樓               ","北區北臺","02-24286511");
  top.taxUnit[28]=new TaxUnit("F30","財政部北區國稅局板橋分局  ","22002","新北市板橋區中山路１段１４３號３樓          ","北區北臺","02-29683569");
  top.taxUnit[29]=new TaxUnit("F31","財政部北區國稅局三重稽徵所","24103","新北市三重區重陽路１段１１５號５樓          ","北區北臺","02-29843701");
  top.taxUnit[30]=new TaxUnit("F32","財政部北區國稅局淡水稽徵所","25158","新北市淡水區中正路１９９號                  ","北區北臺","02-26283266");
  top.taxUnit[31]=new TaxUnit("F33","財政部北區國稅局新店稽徵所","23145","新北市新店區寶橋路８８號                    ","北區北臺","02-29182010");
  top.taxUnit[32]=new TaxUnit("F28","財政部北區國稅局汐止稽徵所","22175","新北市汐止區新台五路１段２６８號９樓        ","北區北臺","02-26486301");
  top.taxUnit[33]=new TaxUnit("F34","財政部北區國稅局瑞芳服務處","22441","新北市瑞芳區明燈路３段４２號５樓            ","北區北臺","02-24969641");
  top.taxUnit[34]=new TaxUnit("F35","財政部北區國稅局中和稽徵所","23586","新北市中和區中正路８６６號９樓              ","北區北臺","02-82275168");
  top.taxUnit[35]=new TaxUnit("F36","財政部北區國稅局新莊稽徵所","24249","新北市新莊區中平路４３９號北棟３至４樓      ","北區北臺","02-89956789");
  top.taxUnit[36]=new TaxUnit("G36","財政部北區國稅局宜蘭分局  ","26052","宜蘭縣宜蘭市泰山路６５號                    ","北區北臺","03-9357201 ");
  top.taxUnit[37]=new TaxUnit("G37","財政部北區國稅局羅東稽徵所","26541","宜蘭縣羅東鎮興東路１６號３樓                ","北區北臺","03-9546508 ");
  top.taxUnit[38]=new TaxUnit("H38","財政部北區國稅局楊梅稽徵所","32653","桃園市楊梅區中山北路２段３１８號            ","北區北臺","03-4311851 ");
  top.taxUnit[39]=new TaxUnit("H39","財政部北區國稅局桃園分局  ","33049","桃園市桃園區三元街１５０號                  ","北區北臺","03-3396511 ");
  top.taxUnit[40]=new TaxUnit("H40","財政部北區國稅局中壢稽徵所","32041","桃園市中壢區中央東路２８號                  ","北區北臺","03-2805123 ");
  top.taxUnit[41]=new TaxUnit("H41","財政部北區國稅局大溪稽徵所","33545","桃園市大溪區公園路１６號                    ","北區北臺","03-3900265 ");
  top.taxUnit[42]=new TaxUnit("O44","財政部北區國稅局新竹分局  ","30041","新竹市中央路１１２號６樓                    ","北區北臺","03-5336060 ");
  top.taxUnit[43]=new TaxUnit("J42","財政部北區國稅局竹北分局  ","30213","新竹縣竹北市縣政九路１２０號                ","北區北臺","03-5585700 ");
  top.taxUnit[44]=new TaxUnit("J43","財政部北區國稅局竹東稽徵所","31047","新竹縣竹東鎮東林路１２８號２樓              ","北區北臺","03-5946640 ");
  top.taxUnit[45]=new TaxUnit("U96","財政部北區國稅局花蓮分局  ","97050","花蓮縣花蓮市明禮路１３１號                  ","北區北臺","03-8311860 ");
  top.taxUnit[46]=new TaxUnit("U97","財政部北區國稅局玉里稽徵所","98142","花蓮縣玉里鎮光復路５２號                    ","北區北臺","03-8881070 ");
  top.taxUnit[47]=new TaxUnit("W01","財政部北區國稅局金門稽徵所","89348","金門縣金城鎮金山路４６號                    ","北區北臺","082-323984 ");
  top.taxUnit[48]=new TaxUnit("Z01","財政部北區國稅局馬祖服務處","20941","連江縣南竿鄉福沃村１００號                  ","北區北臺","0836-25861 ");
  top.taxUnit[49]=new TaxUnit("B47","財政部中區國稅局東山稽徵所","40680","臺中市北屯區豐樂路２段１６８號              ","中區中臺","04-24225822");
  top.taxUnit[50]=new TaxUnit("B48","財政部中區國稅局民權稽徵所","40358","臺中市西區民生路１６８號１樓                ","中區中臺","04-23051116");
  top.taxUnit[51]=new TaxUnit("B49","財政部中區國稅局臺中分局  ","40758","臺中市西屯區文心路２段９９號                ","中區中臺","04-22588181");
  top.taxUnit[52]=new TaxUnit("B58","財政部中區國稅局大智稽徵所","40245","臺中市南區復興路２段７８號６樓              ","中區中臺","04-22612821");
  top.taxUnit[53]=new TaxUnit("K45","財政部中區國稅局苗栗分局  ","36057","苗栗縣苗栗市玉華里玉清路３８６號            ","中區中臺","037-320063 ");
  top.taxUnit[54]=new TaxUnit("K46","財政部中區國稅局竹南稽徵所","35047","苗栗縣竹南鎮正南里福德路１３５號３樓        ","中區中臺","037-460597 ");
  top.taxUnit[55]=new TaxUnit("B50","財政部中區國稅局豐原分局  ","42075","臺中市豐原區南陽路５１５號                  ","中區中臺","04-25291040");
  top.taxUnit[56]=new TaxUnit("B51","財政部中區國稅局沙鹿稽徵所","43306","臺中市沙鹿區鎮政路１０巷１號                ","中區中臺","04-26651351");
  top.taxUnit[57]=new TaxUnit("B52","財政部中區國稅局大屯稽徵所","41246","臺中市大里區中興路２段６３３號１樓          ","中區中臺","04-24852934");
  top.taxUnit[58]=new TaxUnit("B53","財政部中區國稅局東勢稽徵所","42353","臺中市東勢區北興里正二街臨１號              ","中區中臺","04-25881178");
  top.taxUnit[59]=new TaxUnit("M59","財政部中區國稅局南投分局  ","54062","南投縣南投市三和里復興路２號４樓            ","中區中臺","049-2223067");
  top.taxUnit[60]=new TaxUnit("M60","財政部中區國稅局埔里稽徵所","54554","南投縣埔里鎮中山路２段２５２號３樓          ","中區中臺","049-2990991");
  top.taxUnit[61]=new TaxUnit("M61","財政部中區國稅局竹山稽徵所","55757","南投縣竹山鎮公所路１０６號                  ","中區中臺","049-2641914");
  top.taxUnit[62]=new TaxUnit("N55","財政部中區國稅局彰化分局  ","50003","彰化市中山路２段１８７號                    ","中區中臺","04-7274325 ");
  top.taxUnit[63]=new TaxUnit("N56","財政部中區國稅局員林稽徵所","51004","彰化縣員林市三義里惠明街３１９號            ","中區中臺","04-8332100 ");
  top.taxUnit[64]=new TaxUnit("N57","財政部中區國稅局北斗稽徵所","52148","彰化縣北斗鎮中山路２段３０９號５樓          ","中區中臺","04-8871204 ");
  top.taxUnit[65]=new TaxUnit("P63","財政部中區國稅局雲林分局  ","64054","雲林縣斗六市府文路３５號３樓                ","中區中臺","05-5345573 ");
  top.taxUnit[66]=new TaxUnit("P64","財政部中區國稅局北港稽徵所","65147","雲林縣北港鎮民樂路５８號                    ","中區中臺","05-7820249 ");
  top.taxUnit[67]=new TaxUnit("P65","財政部中區國稅局虎尾稽徵所","63242","雲林縣虎尾鎮光明路１１８號４樓              ","中區中臺","05-6338571 ");
  top.taxUnit[68]=new TaxUnit("Q67","財政部南區國稅局嘉義縣分局","61249","嘉義縣太保市祥和二路東段５號４樓            ","南區南臺","05-3621010 ");
  top.taxUnit[69]=new TaxUnit("Q68","財政部南區國稅局民雄稽徵所","62153","嘉義縣民雄鄉文隆村建國路２段２６３－１號    ","南區南臺","05-2062141 ");
  top.taxUnit[70]=new TaxUnit("T90","財政部南區國稅局屏東分局  ","90008","屏東縣屏東市北興街５５號                    ","南區南臺","08-7311166 ");
  top.taxUnit[71]=new TaxUnit("T91","財政部南區國稅局東港稽徵所","92844","屏東縣東港鎮新生二路１６號２樓              ","南區南臺","08-8330132 ");
  top.taxUnit[72]=new TaxUnit("T92","財政部南區國稅局潮州稽徵所","92044","屏東縣潮州鎮永康街６６號                    ","南區南臺","08-7899871 ");
  top.taxUnit[73]=new TaxUnit("T93","財政部南區國稅局恆春稽徵所","94642","屏東縣恆春鎮城南里南門路９８號２樓          ","南區南臺","08-8892484 ");
  top.taxUnit[74]=new TaxUnit("V94","財政部南區國稅局臺東分局  ","95047","臺東縣臺東市中山路１號                      ","南區南臺","089-360001 ");
  top.taxUnit[75]=new TaxUnit("X99","財政部南區國稅局澎湖分局  ","88049","澎湖縣馬公市西文里新店路２６１號            ","南區南臺","06-9262340 ");
  top.taxUnit[76]=new TaxUnit("I66","財政部南區國稅局嘉義市分局","60007","嘉義市中山路１９９號４樓                    ","南區南臺","05-2282233 ");
  top.taxUnit[77]=new TaxUnit("D70","財政部南區國稅局臺南分局  ","70402","臺南市北區富北街７號                        ","南區南臺","06-2220961 ");
  top.taxUnit[78]=new TaxUnit("D71","財政部南區國稅局安南稽徵所","70953","臺南市安南區安中路２段３００號６樓          ","南區南臺","06-2467780 ");
  top.taxUnit[79]=new TaxUnit("D73","財政部南區國稅局新營分局  ","73003","臺南市新營區中正路１５號                    ","南區南臺","06-6573111 ");
  top.taxUnit[80]=new TaxUnit("D74","財政部南區國稅局新化稽徵所","71241","臺南市新化區中正路５８８號                  ","南區南臺","06-5978211 ");
  top.taxUnit[81]=new TaxUnit("D75","財政部南區國稅局佳里稽徵所","72241","臺南市佳里區延平路１２５號                  ","南區南臺","06-7230284 ");
}

function makeTaxHsn() {
    top.taxHsn[0] = new ObjHsn("A", "臺北市");
    top.taxHsn[1] = new ObjHsn("B", "臺中市");
    top.taxHsn[2] = new ObjHsn("C", "基隆市");
    top.taxHsn[3] = new ObjHsn("D", "臺南市");
    top.taxHsn[4] = new ObjHsn("E", "高雄市");
    top.taxHsn[5] = new ObjHsn("F", "新北市");
    top.taxHsn[6] = new ObjHsn("G", "宜蘭縣");
    top.taxHsn[7] = new ObjHsn("H", "桃園市");
    top.taxHsn[8] = new ObjHsn("I", "嘉義市");
    top.taxHsn[9] = new ObjHsn("J", "新竹縣");
    top.taxHsn[10] = new ObjHsn("K", "苗栗縣");
    top.taxHsn[11] = new ObjHsn("M", "南投縣");
    top.taxHsn[12] = new ObjHsn("N", "彰化縣");
    top.taxHsn[13] = new ObjHsn("O", "新竹市");
    top.taxHsn[14] = new ObjHsn("P", "雲林縣");
    top.taxHsn[15] = new ObjHsn("Q", "嘉義縣");
    top.taxHsn[16] = new ObjHsn("T", "屏東縣");
    top.taxHsn[17] = new ObjHsn("U", "花蓮縣");
    top.taxHsn[18] = new ObjHsn("V", "臺東縣");
    top.taxHsn[19] = new ObjHsn("W", "金門縣");
    top.taxHsn[20] = new ObjHsn("X", "澎湖縣");
    top.taxHsn[21] = new ObjHsn("Z", "連江縣");
}

function makeTown(hsn) {
    top.town[hsn] = new Array();
}

function makeVill(town) {
    top.vill[town] = new Array();
}

function ObjHsn(ID, NAME) {
    this.ID = ID;
    this.NAME = NAME;
}

function Vill(KIND, ID, NAME, TAXUNIT, TAXUNIT2) {
    this.KIND = KIND;
    this.ID = ID;
    this.NAME = NAME;
    this.TAXUNIT = TAXUNIT;
    this.TAXUNIT2 = TAXUNIT2; // 管區代號
}

function Town(KIND, ID, NAME, ZIP) {
    this.KIND = KIND;
    this.ID = ID;
    this.NAME = NAME;
    this.ZIP = ZIP;
}

function BankHead(TP, ID, Name) {
    this.ID = ID;
    this.TP = TP;
    this.Name = Name;
}

function Bank(HSN, ID, Name, TP, MaxLen, Online) {
    this.ID = ID;
    this.HSN = HSN;
    this.Name = Name;
    this.TP = TP;
    this.MaxLen = MaxLen;
    this.Online = Online;
}

function MyIrcApp() {
    this.Irc00 = new Irc00("2003", "0", "0", "0", "0", "0", "004.200",
            "20031010090000", "0", spacePadding("Linux", 15), "0",
            spacePadding("", 46), "", "");

    this.Irc01 = new Irc01("092", // YR
            "", // TAX_PAYER
            "", // IDN
            "", // BIRTH
            "", // SPOUS
            "", // SPOUS_IDN
            "", // SPOUS_BIRTH
            "", // HSN
            "", // TOWN
            "", // VILL
            "", // LIN
            "", // ADDR
            "", // RENT
            "", // COMU_HSN
            "", // COMU_TOWN
            "", // COMU_VILL
            "", // COMU_LIN
            "", // COMU_ADDR
            "", // TEL_D
            "", // TEL_N
            "", // EMAIL
            "", // PFN
            "", // PROP
            "", // SAVING
            "", // DISAB
            "", // EDU
            "", // COMMON
            "", // INCOM
            "", // MEMO
            ""  // MARRIAGE_OPT
            );

    this.Irc02 = new Irc02("", "", "", "", "", "", "", "" , "");
    this.Irc03 = new Irc03("", "", "", "", "", "", "");
    this.Irc04 = new Irc04("", "", "", "", "", "", "", "", "", "");
    this.Irc05 = new Irc05("", "", "");
    this.Irc06 = new Irc06("", "", "", "", "", "", "", "", "", "", "", "");
    this.Irc07 = new Array();
    this.Irc08 = new Irc08(0, 0, 0, 0, 0);
    this.Irc09 = new Array();
    this.Irc10 = new Irc10(0/* ZF */, 0/* ZG */, 0/* ZH */, 0/* ZI */, 0/* ZJ */,
            0/* ZK */, 0/* ZM */, 0/* ZL */, 0/* ZR */, 0/* Z2 */, 0/* Z3 */,
            0/* Z4 */, 0/* Z8 */, 0/* R1 */, 0/* R2 */, 0/* R3 */, 0/* R4 */,
            0/* R6 */, 0/* R7 */, 0/* R8 */, 0/* R9 */, 0/* R10 */, 0/* R11 */, 0/* R12 */);
    this.Irc11 = new Irc11(""/* CALC_TP */, 0/* t1 */, 0/* t2 */, 0/* t3 */,
            0/* t4 */, 0/* a1 */, 0/* a2 */, 0/* a3 */, 0/* a4 */, 0/* b1 */,
            0/* b2 */, 0/* b3 */, 0/* b4 */, 0/* b5 */, 0/* b6 */, 0/* b7 */,
            0/* b8 */, 0/* b9 */, 0/* b10 */, 0/* b11 */, 0/* b12 */, 0/* b13 */,
            0/* b14 */, 0/* b15 */, 0/* b16 */, 0/* b17 */, 0/* b18 */, 0/* c1 */,
            0/* c2 */, 0/* c3 */, 0/* c4 */, 0/* c5 */, 0/* c6 */, 0/* c7 */,
            0/* c8 */, 0/* c9 */, 0/* c10 */, 0/* c11 */, 0/* c12 */, 0/* c13 */,
            0/* c14 */, 0/* c15 */, 0/* c16 */, 0/* c17 */, 0/* c18 */, 0/* TOTAL */);
    this.Irc12 = new Irc12(0/* c1 */, 0/* c2 */, 0/* c3 */, 0/* c4 */, 0/* c5 */,
            0/* c6 */, 0/* PayBack */, 0/* Pay */);
    this.Irc13 = new Irc13("", "", "", "", "", 0, "");
    this.Irc14 = new Irc14("", "");
    this.Irc99 = new Irc99("", "");

}

// 證所稅所得格式
function SCTSIncomeType(scts_incm_dstg, scts_incm_tp, scts_incm_d, incm_cn,
    incm_fmt, incm_no, dstg_name, tp_name, d_name, scts_incm_name,
    esstl_exp_rate, long_hold_rate, trst_mark, alertMsg) {

  this.scts_incm_dstg = scts_incm_dstg; // 證券所得區分
  this.scts_incm_tp = scts_incm_tp;     // 證券所得分類
  this.scts_incm_d = scts_incm_d;       // 證券所得明細
  this.incm_cn = incm_cn;               // 所得類別
  this.incm_fmt = incm_fmt;             // 格式代號
  this.incm_no = incm_no;               // 所得代號
  this.dstg_name = dstg_name;           // 證券所得區分名稱
  this.tp_name = tp_name;               // 證券所得分類名稱
  this.d_name = d_name;                 // 證券所得明細名稱
  this.scts_incm_name = scts_incm_name; // 證券交易所得稅名稱(完整名稱)
  this.esstl_exp_rate = esstl_exp_rate; // 必要費用%
  this.long_hold_rate = long_hold_rate; // 長期優惠所得額%
  this.trst_mark = trst_mark;           // 信託註記
  this.alertMsg = alertMsg;             // 新增時的訊息代碼["訊息代碼", "參數一", "參數二"]

}

// 初始化證所稅所得格式
function initSCTSIncomeType(){
  top.aSCTSIncomType[0]  = new SCTSIncomeType("1", "1", "", "7", "55N", "", "有成交價格及原始取得成本", "IPO股票上市、上櫃後繼續持有滿3年以上", "", "IPO股票上市、上櫃後繼續持有滿3年以上", 0, 0, "", []);
  top.aSCTSIncomType[1]  = new SCTSIncomeType("1", "2", "", "7", "55", "", "有成交價格及原始取得成本", "持有滿1年以上", "", "持有滿1年以上", 0, 0, "", []);
  top.aSCTSIncomType[2]  = new SCTSIncomeType("1", "3", "", "7", "55", "", "有成交價格及原始取得成本", "持有未滿1年", "", "持有未滿1年", 0, 0, "", []);
  top.aSCTSIncomType[3]  = new SCTSIncomeType("1", "4", "1", "7", "55M", "","有成交價格及原始取得成本", "信託發生(分配)之證券交易所得", "興櫃股票", "信託發生(分配)之證券交易所得-興櫃股票", 0, 0, "P", []);
  top.aSCTSIncomType[4]  = new SCTSIncomeType("1", "4", "2", "7", "55N", "","有成交價格及原始取得成本", "信託發生(分配)之證券交易所得", "IPO股票", "信託發生(分配)之證券交易所得-IPO股票", 0, 0, "P", []);
  top.aSCTSIncomType[5]  = new SCTSIncomeType("1", "4", "3", "7", "55Q", "","有成交價格及原始取得成本", "信託發生(分配)之證券交易所得", "未上市、未上櫃且未登錄興櫃股票", "信託發生(分配)之證券交易所得-未上市、未上櫃且未登錄興櫃股票", 0, 0, "P", []);
  top.aSCTSIncomType[6]  = new SCTSIncomeType("2","1","1","7","55N","","無法證明原始取得成本", "IPO股票－－有成交價格無原始取得成本", "上市、上櫃後繼續持有滿3年以上", "IPO股票-有成交價格無原始取得成本-上市、上櫃後繼續持有滿3年以上", 50, 12.5, "", ["1","50","1/4"]);
  top.aSCTSIncomType[7]  = new SCTSIncomeType("2","1","2","7","55N","","無法證明原始取得成本", "IPO股票－－有成交價格無原始取得成本", "持有滿1年以上", "IPO股票-有成交價格無原始取得成本-持有滿1年以上", 50, 25, "", ["1","50","1/2"]);
  top.aSCTSIncomType[8]  = new SCTSIncomeType("2","1","3","7","55N","","無法證明原始取得成本", "IPO股票－－有成交價格無原始取得成本", "持有未滿1年", "IPO股票-有成交價格無原始取得成本-持有未滿1年", 50, 0, "", ["2","50",""]);
  top.aSCTSIncomType[9]  = new SCTSIncomeType("2","2","1","7","55N","","無法證明原始取得成本", "IPO股票－－無成交價格", "上市、上櫃後繼續持有滿3年以上", "IPO股票-無成交價格-上市、上櫃後繼續持有滿3年以上", 50, 12.5, "", ["3","50","1/4"]);
  top.aSCTSIncomType[10] = new SCTSIncomeType("2","2","2","7","55N","","無法證明原始取得成本", "IPO股票－－無成交價格", "持有滿1年以上", "IPO股票-無成交價格-持有滿1年以上", 50, 25, "", ["3","50","1/2"]);
  top.aSCTSIncomType[11] = new SCTSIncomeType("2","2","3","7","55N","","無法證明原始取得成本", "IPO股票－－無成交價格", "持有未滿1年", "IPO股票-無成交價格-持有未滿1年", 50, 0, "", ["2","50",""]);
  top.aSCTSIncomType[12] = new SCTSIncomeType("2","3","2","7","55M","","無法證明原始取得成本", "興櫃股票－－有成交價格無原始取得成本", "持有滿1年以上", "興櫃股票-有成交價格無原始取得成本-持有滿1年以上", 85, 7.5, "", ["1","15","1/2"]);
  top.aSCTSIncomType[13] = new SCTSIncomeType("2","3","3","7","55M","","無法證明原始取得成本", "興櫃股票－－有成交價格無原始取得成本", "持有未滿1年", "興櫃股票-有成交價格無原始取得成本-持有未滿1年", 85, 0, "", ["2","15",""]);
  top.aSCTSIncomType[14] = new SCTSIncomeType("2","4","2","7","55M","","無法證明原始取得成本", "興櫃股票－－無成交價格", "持有滿1年以上", "興櫃股票-無成交價格-持有滿1年以上", 85, 7.5, "", ["3","15","1/2"]);
  top.aSCTSIncomType[15] = new SCTSIncomeType("2","4","3","7","55M","","無法證明原始取得成本", "興櫃股票－－無成交價格", "持有未滿1年", "興櫃股票-無成交價格-持有未滿1年", 85, 0, "", ["4","15",""]);
  top.aSCTSIncomType[16] = new SCTSIncomeType("2","5","2","7","55Q","","無法證明原始取得成本", "未上市、未上櫃且未登錄興櫃股票－－有成交價格無原始取得成本", "持有滿1年以上", "未上市、未上櫃且未登錄興櫃股票-有成交價格無原始取得成本-持有滿1年以上", 80, 10, "", ["1","20","1/2"]);
  top.aSCTSIncomType[17] = new SCTSIncomeType("2","5","3","7","55Q","","無法證明原始取得成本", "未上市、未上櫃且未登錄興櫃股票－－有成交價格無原始取得成本", "持有未滿1年", "未上市、未上櫃且未登錄興櫃股票-有成交價格無原始取得成本-持有未滿1年", 80, 0, "", ["2","20",""]);
  top.aSCTSIncomType[18] = new SCTSIncomeType("2","6","2","7","55Q","","無法證明原始取得成本", "未上市、未上櫃且未登錄興櫃股票－－無成交價格", "持有滿1年以上", "未上市、未上櫃且未登錄興櫃股票-無成交價格-持有滿1年以上", 25, 37.5, "", ["3","75","1/2"]);
  top.aSCTSIncomType[19] = new SCTSIncomeType("2","6","3","7","55Q","","無法證明原始取得成本", "未上市、未上櫃且未登錄興櫃股票－－無成交價格", "持有未滿1年", "未上市、未上櫃且未登錄興櫃股票-無成交價格-持有未滿1年", 25, 0, "", ["4","75",""]);
}

// 取得『證券所得區分』名稱
function getSCTS_DSTG_NM(dstg){
  for(var i = 0; i < top.aSCTSIncomType.length; i++){
    if(top.aSCTSIncomType[i].scts_incm_dstg==dstg){
      return top.aSCTSIncomType[i].dstg_name;
    }
  }
}

// 取得『證券所得類別』名稱
function getSCTS_TP_NM(dstg, tp){
  for(var i = 0; i < top.aSCTSIncomType.length; i++){
    if(top.aSCTSIncomType[i].scts_incm_dstg==dstg
        && top.aSCTSIncomType[i].scts_incm_tp==tp){
      return top.aSCTSIncomType[i].tp_name;
    }
  }
}

// 取得『證券所得明細』名稱
function getSCTS_D_NM(dstg, tp, d){
  for(var i = 0; i < top.aSCTSIncomType.length; i++){
    if(top.aSCTSIncomType[i].scts_incm_dstg==dstg
        && top.aSCTSIncomType[i].scts_incm_tp==tp
        && top.aSCTSIncomType[i].scts_incm_d==d){
      return top.aSCTSIncomType[i].d_name;
    }
  }
}

// 取得『證券交易所得稅名稱(完整名稱)』
function getSCTS_INCM_NAME(dstg, tp, d){
  for(var i = 0; i < top.aSCTSIncomType.length; i++){
    if(top.aSCTSIncomType[i].scts_incm_dstg==dstg
        && top.aSCTSIncomType[i].scts_incm_tp==tp
        && top.aSCTSIncomType[i].scts_incm_d==d){
      return top.aSCTSIncomType[i].scts_incm_name;
    }
  }
}

// 取得『所得類別』
function getSCTS_INCM_CN(dstg, tp, d){
  for(var i = 0; i < top.aSCTSIncomType.length; i++){
    if(top.aSCTSIncomType[i].scts_incm_dstg==dstg
        && top.aSCTSIncomType[i].scts_incm_tp==tp
        && top.aSCTSIncomType[i].scts_incm_d==d){
      return top.aSCTSIncomType[i].incm_cn;
    }
  }
}

// 取得『格式代號』
function getSCTS_INCM_FMT(dstg, tp, d){
  for(var i = 0; i < top.aSCTSIncomType.length; i++){
    if(top.aSCTSIncomType[i].scts_incm_dstg==dstg
        && top.aSCTSIncomType[i].scts_incm_tp==tp
        && top.aSCTSIncomType[i].scts_incm_d==d){
      return top.aSCTSIncomType[i].incm_fmt;
    }
  }
}

// 取得『所得代號』
function getSCTS_INCM_NO(dstg, tp, d){
  for(var i = 0; i < top.aSCTSIncomType.length; i++){
    if(top.aSCTSIncomType[i].scts_incm_dstg==dstg
        && top.aSCTSIncomType[i].scts_incm_tp==tp
        && top.aSCTSIncomType[i].scts_incm_d==d){
      return top.aSCTSIncomType[i].incm_no;
    }
  }
}
//取得財產交易所得資料
function getProptyExWasTp(){
  //房屋-自行列舉必要費用及成本*1
  top.incmTypes[153] = new IncomeType("E" , "6" , "76 房屋財產交易所得(自行列舉必要費用及成本)" , "出售房屋坐落地址" , "" , "收入總額" , "必要費用及成本" , "所得總額" , "" , "7" , "76F" , "B" , "0" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[154] = new IncomeType("E" , "7" , "76大陸地區財產交易所得（房屋-自行列舉必要費用及成本）" , "出售房屋坐落地址" , "" , "收入總額" , "必要費用及成本" , "所得總額" , "" , "7" , "76M" , "1" , "0" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[155] = new IncomeType("E" , "8" , "76大陸地區信託財產交易所得" , "出售房屋坐落地址" , "" , "" , "" , "所得總額" , "" , "7" , "76M" , "2" , "0" , "0" , "00" , "Y" , "G" , "N" , "N");
  top.incmTypes[156] = new IncomeType("9" , "9" , "76 臺北市房地總成交金額7千萬元以上(有實際成交金額而無原始取得成本)" , "出售房屋坐落地址" , "" , "收入總額" , "" , "所得總額" , "" , "7" , "76" , "F" , "85" , "0" , "00" , "Y" , "" , "Y" , "N");
  top.incmTypes[157] = new IncomeType("9" , "75" , "76 新北市房地總成交金額6千萬元以上(有實際成交金額而無原始取得成本)" , "出售房屋坐落地址" , "" , "收入總額" , "" , "所得總額" , "" , "7" , "76" , "J" , "85" , "0" , "00" , "Y" , "" , "Y" , "N");
  top.incmTypes[158] = new IncomeType("9" , "10" , "76 雙北市以外地區房地總成交金額4千萬元以上(有實際成交金額而無原始取得成本)" , "出售房屋坐落地址" , "" , "收入總額" , "" , "所得總額" , "" , "7" , "76" , "I" , "85" , "0" , "00" , "Y" , "" , "Y" , "N");
  top.incmTypes[159] = new IncomeType("9" , "47" , "76 臺北市 (高級住宅)[所得總額為房屋評定現值*48%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76A" , "C" , "52" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[160] = new IncomeType("9" , "1" , "76 臺北市(其他)[所得總額為房屋評定現值*42%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76A" , "B" , "58" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[161] = new IncomeType("9" , "17" , "76 新北市(板橋,永和,新店,三重,中和,新莊,土城,蘆洲區)[所得總額為房屋評定現值*36%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76" , "1" , "64" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[162] = new IncomeType("9" , "18" , "76 新北市(汐止,樹林,泰山及林口區)[所得總額為房屋評定現值*33%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76" , "2" , "67" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[163] = new IncomeType("9" , "24" , "76 新北市（淡水及五股區）[所得總額為房屋評定現值*24%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76" , "G" , "76" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[164] = new IncomeType("9" , "54" , "76 新北市（三峽、深坑及八里區）[所得總額為房屋評定現值*21%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76" , "3" , "79" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[165] = new IncomeType("9" , "25" , "76 新北市（其他區）[所得總額為房屋評定現值*14%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76" , "4" , "86" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[166] = new IncomeType("9" , "26" , "76 臺中市(西屯區)[所得總額為房屋評定現值*26%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76" , "5" , "74" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[167] = new IncomeType("9" , "27" , "76 臺中市(南屯及東區)[所得總額為房屋評定現值*20%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76" , "6" , "80" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[168] = new IncomeType("9" , "55" , "76 臺中市(南區)[所得總額為房屋評定現值*19%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76" , "H" , "82" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[169] = new IncomeType("9" , "48" , "76 臺中市(北屯及西區)[所得總額為房屋評定現值*18%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76A" , "D" , "84" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[170] = new IncomeType("9" , "66" , "76 臺中市(中及豐原區)[所得總額為房屋評定現值*17%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76A" , "J" , "85" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[171] = new IncomeType("9" , "79" , "76 臺中市(北區)[所得總額為房屋評定現值*16%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76B" , "O" , "84" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[172] = new IncomeType("9" , "28" , "76 臺中市(太平區)[所得總額為房屋評定現值*15%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76" , "7" , "85" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[173] = new IncomeType("9" , "49" , "76 臺中市（大里）[所得總額為房屋評定現值*14%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76A" , "T" , "86" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[174] = new IncomeType("9" , "49" , "76 臺中市（烏日、后里、大雅及潭子區）[所得總額為房屋評定現值*13%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76A" , "E" , "87" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[175] = new IncomeType("9" , "29" , "76 臺中市(霧峰及神岡區)[所得總額為房屋評定現值*12%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76" , "8" , "88" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[176] = new IncomeType("9" , "50" , "76 臺中市(沙鹿、龍井、大甲、清水、梧棲及大肚區)[所得總額為房屋評定現值*10%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76A" , "F" , "90" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[177] = new IncomeType("9" , "51" , "76 臺中市(東勢區)[所得總額為房屋評定現值*9%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76A" , "G" , "89" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[178] = new IncomeType("9" , "30" , "76 臺中市（其他區）[所得總額為房屋評定現值*8%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76" , "9" , "92" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[179] = new IncomeType("9" , "67" , "76 臺南市（東、北及安平區）[所得總額為房屋評定現值*17%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76A" , "4" , "83" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[180] = new IncomeType("9" , "31" , "76 臺南市（安南及中西區）[所得總額為房屋評定現值*16%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76A" , "1" , "84" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[181] = new IncomeType("9" , "56" , "76 臺南市（南區）[所得總額為房屋評定現值*15%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76A" , "K" , "85" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[182] = new IncomeType("9" , "57" , "76 臺南市（永康區）[所得總額為房屋評定現值*14%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76A" , "L" , "86" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[183] = new IncomeType("9" , "32" , "76 臺南市（新市及新營區）[所得總額為房屋評定現值*10%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76A" , "2" , "90" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[184] = new IncomeType("9" , "68" , "76 臺南市（仁德、佳里、善化、歸仁、鹽水、安定及關廟區）[所得總額為房屋評定現值*9%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76A" , "9" , "91" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[185] = new IncomeType("9" , "33" , "76 臺南市（其他區）[所得總額為房屋評定現值*8%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76A" , "3" , "92" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[186] = new IncomeType("9" , "58" , "76 高雄市（苓雅、新興及前金區）[所得總額為房屋評定現值*24%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76A" , "M" , "76" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[187] = new IncomeType("9" , "83" , "76 高雄市（鼓山、三民）[所得總額為房屋評定現值*26%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76B" , "F" , "74" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[188] = new IncomeType("9" , "59" , "76 高雄市（前鎮區）[所得總額為房屋評定現值*23%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76A" , "N" , "77" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[189] = new IncomeType("9" , "60" , "76 高雄市（左營區）[所得總額為房屋評定現值*23%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76A" , "O" , "77" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[190] = new IncomeType("9" , "61" , "76 高雄市（鹽埕及楠梓區）[所得總額為房屋評定現值*21%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76A" , "P" , "79" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[191] = new IncomeType("9" , "84" , "76 高雄市（小港區）[所得總額為房屋評定現值*22%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76B" , "G" , "78" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[192] = new IncomeType("9" , "5" , "76 高雄市(旗津區)[所得總額為房屋評定現值*20%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76E" , "B" , "80" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[193] = new IncomeType("9" , "35" , "76 高雄市（鳳山區）[所得總額為房屋評定現值*18%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76A" , "5" , "82" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[194] = new IncomeType("9" , "36" , "76 高雄市（鳥松及仁武區）[所得總額為房屋評定現值*12%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76A" , "6" , "88" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[195] = new IncomeType("9" , "62" , "76 高雄市（大社、岡山、大寮、路竹及橋頭區) [所得總額為房屋評定現值*10%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76A" , "Q" , "90" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[196] = new IncomeType("9" , "85" , "76 高雄市（林園、美濃及彌陀區）[所得總額為房屋評定現值*9%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76B" , "H" , "91" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[197] = new IncomeType("9" , "37" , "76 高雄市（其他區）[所得總額為房屋評定現值*8%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76A" , "7" , "92" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[198] = new IncomeType("9" , "38" , "76 桃園市（桃園區、中壢區、八德區及蘆竹區）[所得總額為房屋評定現值*23%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76A" , "8" , "77" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[199] = new IncomeType("9" , "52" , "76 桃園市（平鎮區及龜山區）[所得總額為房屋評定現值*19%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76A" , "H" , "81" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[200] = new IncomeType("9" , "39" , "76 桃園市(楊梅區、大園區、大溪區及龍潭區）[所得總額為房屋評定現值*15%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "7AA" , "9" , "85" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[201] = new IncomeType("9" , "40" , "76 桃園市（其他鄉鎮）[所得總額為房屋評定現值*8%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76B" , "1" , "92" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[202] = new IncomeType("9" , "41" , "76 新竹市 (原省轄市)[所得總額為房屋評定現值*18%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76B" , "2" , "82" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[203] = new IncomeType("9" , "69" , "76 基隆市[所得總額為房屋評定現值*15%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76B" , "A" , "85" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[204] = new IncomeType("9" , "42" , "76 嘉義市 (原省轄市)[所得總額為房屋評定現值*14%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76B" , "3" , "86" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[205] = new IncomeType("9" , "43" , "76 縣轄市(新竹縣竹北市)[所得總額為房屋評定現值*19%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76B" , "4" , "81" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[206] = new IncomeType("9" , "70" , "76 縣轄市（宜蘭縣宜蘭市及花蓮縣花蓮市）[所得總額為房屋評定現值*12%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76B" , "B" , "88" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[207] = new IncomeType("9" , "81" , "76 縣轄市(彰化縣員林市)[所得總額為房屋評定現值*9%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76B" , "I" , "89" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[208] = new IncomeType("9" , "82" , "76 縣轄市(苗栗縣頭份市)[所得總額為房屋評定現值*11%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76B" , "J" , "89" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[209] = new IncomeType("9" , "53" , "76 縣轄市(彰化縣彰化市)[所得總額為房屋評定現值*11%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76A" , "I" , "89" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[210] = new IncomeType("9" , "71" , "76 縣轄市（雲林縣斗六市）[所得總額為房屋評定現值*11%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76A" , "R" , "89" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[211] = new IncomeType("9" , "72" , "76 縣轄市（臺東市）[所得總額為房屋評定現值*11%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76A" , "S" , "89" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[212] = new IncomeType("9" , "86" , "76 縣轄市（嘉義縣朴子市及太保市）[所得總額為房屋評定現值*11%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76B" , "K" , "89" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[213] = new IncomeType("9" , "87" , "76 縣轄市（澎湖縣馬公市）[所得總額為房屋評定現值*11%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76B" , "L" , "89" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[214] = new IncomeType("9" , "88" , "76 縣轄市（屏東縣屏東市）[所得總額為房屋評定現值*11%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76B" , "M" , "89" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[215] = new IncomeType("9" , "44" , "76 縣轄市(其他)[所得總額為房屋評定現值*10%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76B" , "5" , "90" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[216] = new IncomeType("9" , "63" , "76 鄉鎮（金門縣各鄉鎮）[所得總額為房屋評定現值*12%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76B" , "7" , "88" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[217] = new IncomeType("9" , "64" , "76 鄉鎮（苗栗縣竹南鎮）[所得總額為房屋評定現值*11%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76B" , "8" , "89" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[218] = new IncomeType("9" , "65" , "76 鄉鎮（彰化縣大村鄉、永靖鄉、社頭鄉、溪湖鎮、埔心鄉及田中鎮）[所得總額為房屋評定現值*9%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76B" , "9" , "91" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[219] = new IncomeType("9" , "73" , "76 鄉鎮（苗栗縣苑裡鎮及南投縣草屯鎮）[所得總額為房屋評定現值*9%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76B" , "C" , "91" , "0" , "00" , "Y" , "" , "N" , "N" );
  top.incmTypes[220] = new IncomeType("9" , "74" , "76 鄉鎮[屏東縣潮州鎮、琉球鄉、恆春鎮、九如鄉、內埔鄉、長治鄉及萬丹鄉][所得總額為房屋評定現值*9%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76B" , "D" , "91" , "0" , "00" , "Y" , "" , "N" , "N" );
  top.incmTypes[221] = new IncomeType("9" , "89" , "76 鄉鎮（屏東縣東港鎮）[所得總額為房屋評定現值*10%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76B" , "N" , "90" , "0" , "00" , "Y" , "" , "N" , "N" );
  top.incmTypes[222] = new IncomeType("9" , "45" , "76 鄉鎮(其他)[所得總額為房屋評定現值*8%]" , "出售房屋坐落地址" , "" , "房屋評定現值" , "" , "所得總額" , "" , "7" , "76B" , "6" , "92" , "0" , "00" , "Y" , "" , "N" , "N" );
  //非房屋-自行列舉必要費用及成本*10
  top.incmTypes[223] = new IncomeType("F" , "7" , "76 非房屋財產交易所得" , "所得發生處所名稱" , "" , "收入總額" , "必要費用及成本" , "所得總額" , "" , "7" , "76" , "E" , "0" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[224] = new IncomeType("F" , "8" , "76 信託財產交易所得" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "所得總額" , "" , "7" , "76F" , "B" , "0" , "0" , "00" , "N" , "T" , "N" , "N" );
  top.incmTypes[225] = new IncomeType("F" , "46" , "76P信託財產交易所得（有價證券借貸轉開憑單）" , "所得發生處所名稱" , "扣繳單位統一編號" , "" , "" , "所得總額" , "" , "7" , "76P" , "3" , "0" , "0" , "00" , "N" , "T" , "N" , "N");
  top.incmTypes[226] = new IncomeType("F" , "11" , "76技術讓與取得現金（自行列舉必要費用及成本）" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "" , "7" , "76P" , "1" , "0" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[227] = new IncomeType("F" , "13" , "76技術讓與取得認股權憑證（自行列舉必要費用及成本）" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "" , "7" , "76Q" , "1" , "0" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[228] = new IncomeType("F" , "15" , "76技術讓與取得公司股份（自行列舉必要費用及成本）" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "" , "7" , "76R" , "1" , "0" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[229] = new IncomeType("F" , "22" , "76技術讓與取得公司股份、現金（自行列舉必要費用及成本）" , "所得發生處所名稱" , "" , "收入總額" , "必要費用及成本" , "所得總額" , "" , "7" , "76G" , "3" , "0" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[230] = new IncomeType("F" , "19" , "76 浮動利率資金交易平台-財產交易所得        " , "所得發生處所名稱" , "所得發生統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "" , "7" , "76I" , "I" , "0" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[231] = new IncomeType("F" , "20" , "76 生技新藥公司技術投資人(自行列舉必要費用及成本)      " , "" , "" , "收入總額" , "必要費用及成本" , "所得總額" , "" , "7" , "76C" , "1" , "0" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[232] = new IncomeType("F" , "76" , "76 股東為智慧財產權所有人-緩課記名股票      " , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "" , "7" , "76B" , "E" , "0" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[233] = new IncomeType("F" , "81" , "76大陸地區財產交易所得（非房屋-自行列舉必要費用及成本）" , "所得發生處所名稱" , "" , "收入總額" , "必要費用及成本" , "所得總額" , "" , "7" , "76M" , "3" , "0" , "0" , "00" , "Y" , "" , "N" , "N");
  top.incmTypes[234] = new IncomeType("F" , "82" , "76大陸地區信託財產交易所得（非房屋-自行列舉必要費用及成本）" , "所得發生處所名稱" , "" , "收入總額" , "必要費用及成本" , "所得總額" , "" , "7" , "76M" , "4" , "0" , "0" , "00" , "Y" , "G" , "N" , "N");
  //非房屋-無法證明成本費用者適用*5
  top.incmTypes[235] = new IncomeType("G" , "12" , "76技術讓與取得現金（採標準費用率30﹪）" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "" , "7" , "76P" , "2" , "30" , "0" , "00" , "Y" , "" , "N" , "Y");
  top.incmTypes[236] = new IncomeType("G" , "14" , "76技術讓與取得認股權憑證（採標準費用率30﹪）" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "" , "7" , "76Q" , "2" , "30" , "0" , "00" , "Y" , "" , "N" , "Y");
  top.incmTypes[237] = new IncomeType("G" , "16" , "76技術讓與取得公司股份（採標準費用率30﹪）" , "所得發生處所名稱" , "扣繳單位統一編號" , "收入總額" , "必要費用及成本" , "所得總額" , "" , "7" , "76R" , "2" , "30" , "0" , "00" , "Y" , "" , "N" , "Y");
  top.incmTypes[238] = new IncomeType("G" , "23" , "76 技術讓與取得公司股份、現金（採標準費用率30﹪）      " , "" , "" , "收入總額" , "必要費用及成本" , "所得總額" , "" , "7" , "76G" , "4" , "30" , "0" , "00" , "Y" , "" , "N" , "Y");
  top.incmTypes[239] = new IncomeType("G" , "21" , "76 生技新藥公司技術投資人(採標準費用率30﹪)      " , "" , "" , "收入總額" , "必要費用及成本" , "所得總額" , "" , "7" , "76C" , "2" , "30" , "0" , "00" , "Y" , "" , "N" , "N");
}

