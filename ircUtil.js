//2012.04.29 showName(idn).加idn中有*號的 by 2295
//2012.05.16 修改檢附證明文件說明文字 by 2295
//2013.12.02 101年度【檢討會-案55】(北區)「應檢送各項證明文件單據申報表」之土地租賃所得增加說明文字。 by 6071
//2013.12.17 Mantis : 0011924, 101年度【檢討會-案47】 by 6071
//2013.12.19 adj 『大陸地區之其它親屬』更改為『大陸地區之其他親屬或家屬(如伯、姪、甥、舅等)』 by 6071
//2014.01.15 adj Mantis : 0012096, 101年度【檢討會-案87】(南區)「應檢送各項證明文件單據申報表」增加「及收付價款證明影本」 by 6071
var Hint_Startup_IsNewVersion = "您現在所使用的為最新版程式.";
var Hint_Startup_CheckHouhld = "您是否要現在檢核戶號？ 〔說明〕若選<是>鈕，請先連線至網際網路，　若選<否>鈕，您可先進入基本資料頁　後，再按<檢核戶號>，隨時連線檢查戶　號是否正確.";
var Hint_Startup_HouhldIDN = "身分證統一編號與戶號比對錯誤,若要重新輸入請選<是>鈕，若要進入進入基本資料頁後再做比對，請選<否>鈕.";
var Hint_Startup_HouhldIDNConnection = "網路傳輸過程錯誤!若要重新輸入請選<是>鈕，若要進入進入基本資料頁後再做比對，請選<否>鈕.";
var Hint_Startup_Download = "下載稅籍、所得資料說明：1、以下係依稽徵機關、戶政單位(截至90年9月30日)提供之戶籍資料，將夫、妻﹝當年度   結婚、離婚者，夫或妻之所得資料分戶提   供﹞及未成年子女之扣免繳憑單、股利憑   單所得等資料併為一戶。2、請就實際應申報之最新稅籍、所得資料   ﹝姓名空白者可能為中文內碼不同所致﹞   作修正，再辦理申報.3、若您有'9B必要費用及成本'所得資料，請於匯入所得資料後，再補登'收入總額、必要費用及成本、扣繳稅額'項目.";
var Hint_Startup_import = "匯入完成！扶養親屬之檢核條件，請自行檢查，若有不符，需自行更正.";
var Hint_Startup_status = "夫或妻有申請分戶提供，故本人與配偶之資料分開提供.";
var Hint_Startup_status2 = "扶養人有申請分戶提供，故扶養人之資料不提供查詢.";
var Hint_Startup_status_Payer = "本人有申請其扣免繳所得資料不提供查詢.";
var Hint_Startup_status_Spous = "配偶有申請其扣免繳所得資料不提供查詢.";
var Hint_Startup_status_Depnt = "扶養人有申請其扣免繳所得資料不提供查詢.";
var Hint_Startup_CheckHouhld_Success = "戶號檢核正確.";
// 【主執行畫面】
var Hint_Main_CloseQuery = "您即將離開本系統，請問您要儲存申報資料嗎?";
var Hint_Main_GCAtoHouhld = "如果改以配偶為申報人，就需改以戶號和身分證統一編號登入.";
var Hint_main_GCAtoHouhld_Success = "1.您己成功切換至<身分證統一編號 + 戶號> 模式，離開程式前，請記得儲存檔案，下次重新進入本申報程式，請選此登入模式，再選擇讀取儲存的申報資料，重新讀取您的資料.2.若您尚未檢核<戶號>與納稅人<身分證統一編號>是否正確，可按<檢核戶號>鈕，連線至申報主機檢查";
// 【親屬資料】
var Hint_Depnt_AskNOML = "請問此位親屬為無謀生能力者嗎?";
var Hint_Depnt_AskMAIMED = "請問此位親屬為身心殘障者嗎?";
var Hint_Depnt_AskPIT = "請問此位親屬之父或母為現役軍人、托兒所、幼稚園或公私立國民中小學的教職員嗎?";
//var Hint_Depnt_NeedNOMLDoc="●為無謀生能力者，請檢附身心障礙手冊影本或醫院證明或其他適當證明文件.";
var Hint_Depnt_NeedNOMLDoc = "●因身心障礙或無謀生能力，確係受納稅義務人扶養者，請檢附身心障礙手冊影本或醫院證明或其他適當證明文件.";
var Hint_Depnt_NeedNOMLDoc60 = "●為未滿60歲而無謀生能力者，請檢附身心障礙手冊影本或醫院證明或其他適當證明文件；如其當年度所得額未超過免稅額且非屬免稅所得者，可檢附其服務機關掣發之在職證明或薪資所得之扣繳憑單或投保單位開立之全民健康保險之繳費收據或其他適當證明文件.";
//102年度檢討會【高國-案9】修改列報滿20歲仍在學扶養親屬之應檢附說明文字 2014.11.12 by 6071
//var Hint_Depnt_NeedSCHLDoc="●請檢附當年度繳納學費收據影本、學生證影本(蓋有註冊章)、畢業證書影本、在學證明書或其他足資證明文件 （檢附國外在學證明文件者，請自行翻譯註記）；如已利用網際網路下載或臨櫃查詢綜合所得稅結算申報扣除額資料參考清單，查有教育學費扣除額資料者，可免檢附以上證明文件.";
var Hint_Depnt_NeedSCHLDoc = "●請檢附當年度繳納學費收據或學生證影本(有當年度註冊章)或在學證明書或畢業證書影本(檢附國外在學證明文件者，請自行翻譯註記 ).";
var Hint_MainLand_Depnt_NeedSCHLDoc = "●請檢附經財團法人海峽交流基金會核驗後之繳納學費收據、學生證影本、在學證明書或畢業證書影本及其他證明文件.";
var Hint_Depnt_NeedPITDoc = "●請檢附其父母親職業證明文件.";
var Hint_Depnt_NeedOtherDepntDoc = "●與納稅義務人本人同戶籍者請檢附戶口名簿影本或其他適當證明文件; 不同戶籍者請檢附受扶養者(或監護人)註明確係受納稅義務人扶養之切結書或其他適當證明文件.";
var Hint_Depnt_NeedMainLandDepntDoc = "●請檢附經財團法人海峽交流基金會核驗後之居民身分證影本、當年度親屬關係證明及其他證明文件.";
//var Hint_Depnt_NeedMainLandDepntDoc2="●應檢附居民身分證影本及當年度親屬關係證明，受扶養親屬身心殘障或無謀生能力者，應再檢具在學證明或身體傷殘、精神障礙、智能不足、重大疾病等之證明；扣除額部分，應檢附足資證明之文件。前述各項證明文件均須送經財團法人海峽交流基金會驗證後，供稽徵機關核認.";
var Hint_Depnt_NeedMainLandDepntDoc2 = "●應檢附居民身分證影本及當年度親屬關係證明，申報扶養子女、同胞兄弟姊妹年滿20歲仍在校就學、身心障礙或無謀生能力者，應再檢具在學證明或身體傷殘、精神障礙、智能不足、重大疾病等之證明；扣除額部分，應檢附足資證明之文件。前述各項證明文件應檢具大陸地區公證處所核發公證書，且送經財團法人海峽交流基金會驗證，供稽徵機關核認（各所得年度有關之公證書應逐次取得）.";
var Hint_Depnt_NeedMainLandDepntDoc3 = "●申報之配偶如為大陸人士，請檢附居民身分證影本及當年度親屬關係證明(如結婚證書)；扣除額部分，應檢附足資證明之文件。前述各項證明文件均須送經財團法人海峽交流基金會驗證後，供稽徵機關核認。另如為華僑或外國人請檢附足資證明親屬關係的文件。";
var Hint_Depnt_FRGDoc = "●應檢附足資證明親屬關係之文件.";
var Hint_Depnt_NeedFrgDepntDoc1 = "●應檢附足資證明親屬關係之文件.";
// 【所得資料】
var Hint_Incom_NeedIncomDoc1 = "●檢附折舊、修理費、地價稅、房屋稅及其附加捐、以出租財產為保險標的物所投保之保險費、向金融機構借款而出租之利息等必要費用證明文件.";
// 2013.12.02 101年度【檢討會-案55】(北區)「應檢送各項證明文件單據申報表」之土地租賃所得增加說明文字(申報土地租賃所得採自行列舉必要費用（扣除地價稅）時，請檢附地價稅單及土地租賃契約書影本.)。 by 6071
//var Hint_Incom_NeedIncomDoc2="●請檢附地價稅單影本.";
var Hint_Incom_NeedIncomDoc2 = "●請檢附地價稅單及土地租賃契約書影本.";
var Hint_Incom_NeedIncomDoc3 = "●請檢附相關證明文件.";
var Hint_Incom_NeedIncomDoc4 = "●合夥事業之合夥人每年度應分配之盈餘總額或獨資資本主每年自獨資經營事業所得之盈餘總額，請檢附" + taxYear + "年度已申報之營利事業投資人明細及分配盈餘表。";
//var Hint_Incom_NeedIncomDoc5="●檢附收入明細表及損益計算表。";
var Hint_Incom_NeedIncomDoc5 = "●檢附收入明細表。";
var Hint_Incom_NeedIncomDoc6 = "●檢附買賣契約（私契）及價款收付紀錄、法院拍賣拍定通知書或其他證明文件。";
var Hint_Incom_NeedIncomDoc7 = "●請檢附相關文件。";
var Hint_Incom_NeedIncomDoc8 = "●請利用「執行業務暨其他所得者電子申報系統」(下載網址http:／／tax.nat.gov.tw)辦理網路申報收支報告表，如未運用該系統者，請自行檢附損益計算表及收入明細表。 ";
var Hint_Incom_NeedIncomDoc9 = "●請檢附成本及必要費用證明文件。";
var Hint_Incom_NeedIncomDoc10 = "●請檢附收入明細表";
var Hint_Incom_NeedIncomDoc11 = "●請檢附出售之買賣契約(私契)及價款收付紀錄或其他證明文件。";
var Hint_Incom_Info = "所列舉之必要費用及成本小於標準費用，應採標準費用率申報較有利！是否繼續？";
var Hint_Incom_NeedBasicIncom = "台端如符合下列條件之一者，不必申報基本稅額：\n\n１、申報綜合所得稅時，未適用投資抵減獎勵，且沒有\n　　「特定保險給付」、「有價證券交易所得」、「非\n　　現金捐贈扣除額」及「員工分紅配股時價超過面額\n　　部分」等應計入基本所得額之項目者。\n\n２、雖有上述應計入基本所得額之項目，但申報戶之基\n　　本所得額在670萬元以下者。";
var Hint_Incom_WH = "已有一筆格式為51房屋（逐項舉證費用）之所得資料，其出租房屋稅籍編號與坐落與此筆資料相同，故押金設算租賃所得之必要成本費用應為零。";
var Hint_Download_Dep = "本功能提供申報人配偶及同一申報戶成員，其所得資料、扣除額資料未歸入同一申報戶者，可直接下載匯入所得資料、扣除額資料；若其所得資料、扣除額資料已歸屬申報者同一戶，且可由納稅義務人憑證下載，則不需此功能。又本功能下載之扣除額資料僅包括保險費、購屋借款利息之列舉扣除額及教育學費特別扣除額；其餘扣除額資料仍應自行新增";
// 【列舉扣除】
var Hint_Deduct_NeedDoc1 = "檢附受贈單位開立之捐款收據正本.";
var Hint_Deduct_NeedDoc2 = "請檢附捐贈收據正本。";
var Hint_Deduct_NeedDoc2_DOWNLOAD = "申報之捐贈金額與利用網際網路下載或臨櫃查詢之綜合所得稅結算申報扣除額資料參考清單上之金額相符，且合於所得稅法規定者，可免檢附捐贈收據；如申報之捐贈金額與前開清單不符者，仍應檢附捐贈收據正本.";
var Hint_Deduct_NeedDoc3 = "應檢附人身保險保費收據或保險費繳納證明書正本或服務單位填發之證明(由機關團體或事業單位彙繳者)正本。(被保險人與要保人應在同一申報戶內，每人可扣除最高總額24000元)";
var Hint_Deduct_NeedDoc3_DOWNLOAD = "申報之本人、配偶及各直系受扶養親屬之人身保險費與利用網際網路下載或臨櫃查詢之扣除額資料參考清單上之金額皆相符，可免檢附收據或繳納證明正本。如有修改或自行輸入者，應檢附人身保險保費收據或保險費繳納證明書正本或服務單位填發之證明(由機關團體或事業單位彙繳者)正本。(被保險人與要保人應在同一申報戶內，每人可扣除最高總額為24,000元)";
//2014.02.14 adj 101年度【檢討會-案18】 by 6071
//var Hint_Deduct_NeedDoc4="1.申報扣除之醫藥及生育費不超過網路下載或臨櫃查詢之金額，可免檢附其繳費單據；惟如有依規定應另行檢附診斷證明者（例：因牙病所為鑲牙、假牙製作及齒列矯正之醫療費用支出），仍應依規定檢附。\n2.申報扣除之醫藥及生育費，非屬可供下載查詢範圍金額者，仍應依規定檢附醫療院所開立之繳費單據、診斷證明等文件。";
var Hint_Deduct_NeedDoc4 = "申報扣除之醫藥及生育費與網路下載或臨櫃查詢之金額不符或非屬可供下載查詢範圍金額者，及應另行檢附證明文件者（例：因牙病所為鑲牙、假牙製作及齒列矯正之醫療費用支出），請檢附醫療院所開立之繳費單據及診斷證明等正本文件。";
var Hint_Deduct_NeedDoc4_DOWNLOAD = "免檢附其繳費單據，惟如有依規定應另行檢附診斷證明者（例：因牙病所為鑲牙、假牙製作及齒列矯正之醫療費用支出），仍應依規定檢附。";
var Hint_Deduct_NeedDoc5 = "請檢附國稅局調查核發的災害損失證明或自行提出損失屬實之確實證據。";
var Hint_Deduct_NeedDoc5_DOWNLOAD = "請檢附國稅局調查核發的災害損失證明或自行提出損失屬實之確實證據.";
var Hint_Deduct_NeedDoc6 = "請檢附利息單據正本（載明或填註該房屋坐落地址、所有權人、借款人、取得日、借款用途）、戶口名簿影本、房屋所有權狀影本或建物登記謄本、轉貸證明等其他證明文件.";
var Hint_Deduct_NeedDoc6_DOWNLOAD = "屬網路下載或臨櫃查詢之購屋借款利息，資料未載明房屋座落地址、房屋所有權人身分證號、姓名、房屋所有權取得日等欄位，應於查詢清單上自行補註及簽章，並檢附建物所有權狀影本、戶口名簿影本或轉貸證明等證明文件，免再檢附利息清單正本單據；如查詢清單已記載明確者，得免檢附相關證明文件。";
var Hint_Deduct_NeedDoc7 = "檢附 1.租賃契約書及付款證明影本（如：出租人簽收之收據、自動櫃員機轉帳交易明細表或匯款證明）2.承租地址戶籍登記影本或供自住且非供營業或執行業務使用之切結書.";
var Hint_Deduct_NeedDoc8 = "檢附擬參選人依規定開立之受贈收據正本.";
var Hint_Deduct_NeedDoc9 = "檢附政黨依規定開立之受贈收據正本.";
var Hint_Deduct_NeedDoc10 = "A.開立政治獻金專戶收受政治獻金者，應檢附向監察院申報的會計報告書影本及經費支出憑據影本或證明文件。B.未開立政治獻金專戶收受政治獻金者，應依政治獻金法第18條第3項第2款規定項目將競選經費分別列示，並檢附經費支出憑據影本或證明文件.";
var Hint_Deduct_NeedDoc11 = "檢附政治團體依規定開立之受贈收據正本.";
var Hint_Deduct_NeedDoc12 = "檢附候選人自行依協議比例列舉扣除之協議書及競選經費收支憑據或證明文件.";
var Hint_Deduct_NeedDoc13 = "檢附收據正本.";
var Hint_Deduct_NeedDoc14 = "檢附A.受贈機關、機構或團體開具領受捐贈的證明文件B.購入該捐贈土地的買賣契約書及付款證明，或其他足資證明文件.";
var Hint_Deduct_NeedDoc17 = "應檢附全民健康保險費收據或保險費繳納證明書正本或服務單位填發之證明（由機關團體或事業單位彙繳者）正本。（被保險人與要保人應在同一申報戶內）";
var Hint_Deduct_NeedDoc17_DOWNLOAD = "申報之本人、配偶及各直系受扶養親屬之全民健保保險費與利用網際網路下載或臨櫃查詢之扣除額資料參考清單上之金額皆相符，可免檢附收據或繳納證明正本。如有修改或自行輸入者，應檢附全民健康保險費收據或保險費繳納證明書正本或服務單位填發之證明（由機關團體或事業單位彙繳者）正本。(被保險人與其眷屬應在同一申報戶內)";
var Hint_Deduct_InfoS11 = "對機關或團體之捐贈(以綜合所得總額之%s％為限) ";
var Hint_Deduct_InfoS12 = "對政府、國防、勞軍、古蹟維護之捐贈";
var Hint_Deduct_InfoS13 = "以土地對政府之捐贈";
var Hint_Deduct_InfoS21 = "人身保險費-非健保之保費 ";
var Hint_Deduct_InfoS22 = "每人最高總額%s元";
var Hint_Deduct_InfoS3 = "醫療及生育費";
var Hint_Deduct_InfoS4 = "災害損失";
var Hint_Deduct_InfoS5 = "自用住宅購屋借款利息";
var Hint_Deduct_InfoS6 = "房屋租金支出";
var Hint_Deduct_InfoS71 = "依政治獻金法規定對擬參選人之捐贈";
var Hint_Deduct_InfoS72 = "個人限制%s元";
var Hint_Deduct_InfoS73 = "個人對同一擬參選人之捐贈總額，不得超過100,000元";
var Hint_Deduct_InfoS81 = "依政治獻金法規定對政黨之捐贈";
var Hint_Deduct_InfoS82 = "對政黨、政治團體及擬參選人之捐贈，每一申報戶可扣除之總額，不得超過當年度申報之綜合所得總額%s％，且其總金額不得超過%s元。目前計有中國國民黨、民主進步黨、新黨、台灣團結聯盟及無黨團結聯盟。";
var Hint_Deduct_InfoS9 = "依公職人員選罷法規定候選人之競選經費 ";
var Hint_Deduct_InfoS10 = "依政治獻金法對政治團體之捐贈";
var Hint_Deduct_InfoS111 = "依總統副總統選罷法規定候選人之競選經費";
var Hint_Deduct_InfoS121 = "私立學校法第62條規定之捐贈(指定學校法人或學校)";
var Hint_Deduct_InfoS123 = "私立學校法第62條規定之捐贈(未指定學校法人或學校)";
var Hint_Deduct_InfoS124 = "私立學校法第62條規定之捐贈";
var Hint_Deduct_InfoS122 = "個人透過財團法人私立學校興學基金會，對學校法人或該法96年12月18日修正條文施行前已設立的財團法人私立學校的捐款，金額不得超過綜合所得總額%s％；惟如未指定捐款予特定的學校法人或學校者，得全數列舉扣除。須檢附收據正本以供查核。";
var Hint_Deduct_InfoS131 = "人身保險費-健保費 ";
var Hint_Deduct_NoDocList = "您目前尚未有應檢送列舉扣除證明文件單據.";
var Hint_Deduct_DebMsg = "請自行勾選〔是否辦理戶籍登記〕項目，勾選後方可認列此筆自用住宅購屋借款利息，勾選完成請按下方〔修改〕鈕";
var Hint_Deduct_NotCheck = "需勾選〔是否辦理戶籍登記〕項目，方可認列此筆自用住宅購屋借款利息";
var Hint_Deduct_InfoS17 = "您申報扣除的健保費高於每人每年最高金額，是否確認無誤？";
var Hint_Deduct_InfoS5_Download = "提醒您！您所查詢之扣除額資料有購屋借款利息，請點選〔確認〕鈕，進入〔購屋借款利息〕畫面，如欲列報請勾選一筆符合稅法規定之資料帶入！";
var Hint_Deduct_InfoS4_Download = "1.該欄項所載金額，係由您所查詢下載之醫藥生育費扣除額\n  資料自動合計帶入，請以下述增減計算後之餘額填列：\n  (1)應減除：退費、受領保險給付及非屬醫療性質部分。\n  (2)應加計：符合申報列舉扣除之醫藥生育費，而非屬本\n     年度可供查詢資料範圍者。\n2.該欄項所填載金額（含查詢及非查詢範圍醫藥生育費扣除\n  額）中，如有依規定應另行檢附診斷證明者（例：因牙病\n  所為鑲牙、假牙製作及齒列矯正之醫療費支出），應依規\n  定檢附。";
var Hint_Deduct_InfoS1_Download = "該欄項所載金額，係由您所查詢下載之捐贈扣除額資料自動合計帶入，請以下述增減計算後之餘額填列：\n(1)應減除：非屬捐贈性質部分。\n(2)應加計：符合申報列舉扣除之捐贈(應依規定檢附證明文件) 。";

// 【扣除額】
var Hint_DeductTotal_NeedDoc1 = "檢附財產之實際成交價額及取得與改良成本之證明文件影本或稽徵機關核發之損失證明.";
var Hint_DeductTotal_NeedDoc2 = "請檢附身心障礙手冊影本，如為精神衛生法第3條第4款規定的病人，須檢附專科醫生的嚴重病人診斷證明書影本(不得以重大傷病卡代替)。";
//102年度檢討會【高國-案9】修改列報滿20歲仍在學扶養親屬之應檢附說明文字 2014.11.12 by 6071
//var Hint_DeductTotal_NeedDoc3="請檢附當年度繳納學費收據影本、學生證影本(蓋有註冊章)、畢業證書影本、在學證明書或其他足資證明文件(檢附國外在學證明文件者，請自行翻譯註記)。";
var Hint_DeductTotal_NeedDoc3 = "請檢附當年度繳納學費收據或生證影本(有當年度註冊章)或在學證明書或畢業影本(檢附國外在學證明文件者，請自行翻譯註記 ).";



// 【稅額試算】
var Hint_Change_Payer = "目前稅額計算結果，依台端選定納稅義務人之方式雖然有利，但是建議調整以【配偶】為納稅義務人本人辦理申報更為有利，是否更換配偶為納稅義務人本人辦理申報？（說明）一、同意更換【配偶】為納稅義務人本人辦理申報　(一)若您是以『GCA身分憑證』方式進入本      申報系統者：1、系統將自動轉為以『(身分證統一編號)及(戶號)』方式，辦理上傳申報 及存檔。請依畫面指示輸入【配偶】戶口名簿上之『戶號』，並點選(戶號檢核)鈕，檢核是否正確，以利上傳申報成功。2、您也可以離開本系統，改採以『【配偶】的GCA身分憑證』重新進入系統，並重新輸入申報資料辦理申報。 (二)若您是『(身分證統一編號)及(戶號)』方式進入本申報系統者：系統將自動把『納稅義務人本人』與『配偶』之相關資料互換，辦理上傳申報及存檔。請依畫面指示輸入【配偶】戶口名簿上之『戶號』，並點選(檢核戶號)鈕，檢核是否正確，以利上傳申報成功。二、不同意更換【配偶】為納稅義務人本人辦理申報，系統將依原輸入內容繼續處理申報作業。";
// 【投資抵減】
var Hint_Invest_NeedDoc = "檢附被投資事業出具之投資抵減稅額證明書或稽徵機關核發之餘額表.";
var Hint_Invest_Checked = "您勾選「是」[新興重要策略性產業]，請確定所持有之股\n東投資投抵稅額證明書抬頭為[新興重要策略性產業]；若\n不是，請按〔取消〕鈕，重新勾選否．";
// 【重購自用住宅】
// 2014.01.15 adj Mantis : 0012096, 101年度【檢討會-案87】(南區)「應檢送各項證明文件單據申報表」增加「及收付價款證明影本」 by 6071
//var Hint_Rehouse_NeesDoc="出售及重購年度之戶口名簿影本、出售及重購自用住宅房屋之買賣契約書（亦可檢附向地政機關辦理移轉登記蓋有收件章之契約文件影本代替）及所有權狀影本.";
var Hint_Rehouse_NeesDoc = "出售及重購年度之戶口名簿影本、出售及重購自用住宅房屋之買賣契約書及收付價款證明影本（亦可檢附向地政機關辦理移轉登記蓋有收件章之契約文件影本代替）及所有權狀影本.";
var Hint_Rehouse_Income = "應在「所得資料」頁籤輸入乙筆財產交易所得，並勾選「設算重購自用住宅扣抵稅額」，及輸入重購自用住宅相關資料";
// 【大陸地區所得】
var Hint_MainLand_NeedDoc = "應檢附先送經行政院設立或指定之機構或委託之民間團體(目前為財團法人海峽交流基金會)驗證後之大陸地區完納所得稅證明文件";
// 【申報上傳】
//2013/04/28 update by 6071
//var Hint_Upload_Conf = "注意!\n\n1.若前次申報已採線上繳稅(電子錢包立即扣款)，經申報資料上傳成功後，本次應繳金額將扣除前次已繳金額，繳稅者採線上繳稅，退稅者由國稅局辦理退稅!\n\n2.於申報上傳成功後，申報時戶籍地將不允許變更，請確認您所輸入之申報時戶籍地為正確資料後，再進行申報.\n\n現在即將上傳綜合所得稅結算申報資料，建議您於上傳申報前，儲存現在即將上傳之申報資料，請問您確定要現在上傳嗎?";
var Hint_Upload_Conf = "注意!\n\n1.若前次申報已採線上(晶片金融卡)或活期(儲蓄)存款帳戶繳稅，經申報資料上傳成功後，本次應繳金額將扣除前次已繳金額，繳稅者採前次繳稅方式【線上(晶片金融卡)或活期(儲蓄)存款帳戶繳稅】，退稅者由國稅局辦理退稅!\n\n2.於申報上傳成功後，申報時戶籍地將不允許變更，請確認您所輸入之申報時戶籍地為正確資料後，再進行申報.\n\n現在即將上傳綜合所得稅結算申報資料，建議您於上傳申報前，儲存現在即將上傳之申報資料，請問您確定要現在上傳嗎?";
var Hint_Upload_Success = "上傳申報成功！\n\n請您列印收執聯及應檢送各項證明文件單據申報表與附件回函，將應檢送之證\n明文件單據連同應檢送各項證明文件單據申報表送戶籍所在地之稽徵機關。\n\n財政部關心您！";
var Hint_Upload_Success_Detail = "上傳申報成功！\n\n請您列印收執聯及應檢送各項證明文件單據申報表與附件回函，將應檢送之證\n明文件單據連同應檢送各項證明文件單據申報表送戶籍所在地之稽徵機關。\n\n財政部關心您！";
// 選擇金融機構
var Hint_SelectBank_NoBank = "查無此金融機構,請重新輸入查詢條件";
// 信用卡
var Hint_CreditPayAgain_SameAmt = "您已使用信用卡繳稅授權成功，若您尚未\n上傳信用卡繳稅資料，可按[確定]鈕後，\n於信用卡繳稅說明頁，按[上傳]鈕，上傳\n申報資料。\n\n若上傳不成功，同此方式，可再點選信用\n卡繳稅，取得已授權之授權碼，再次上傳\n申報資料。\n\n若您曾經改採委託取款上傳成功，可選擇\n上傳更正，或不需上傳，系統不會對委託\n取款部份重複扣款。";
var Hint_CreditPayAgain_notSameAmt = "您已使用信用卡繳稅授權成功，但本次稅\n額與信用卡繳稅授權稅額不等，請改用委\n託取款方式上傳，系統會自動計算差額再\n扣除(於回執聯顯示實際稅託取款金額)；\n溢繳案件，請見信用卡繳稅說明。";
// 【Warning 警告訊息】
// 輸出入
var Warning_IO_NeedDownLoad = "現在最新版本為 2.08 版，建議您上網路下載更新程式.";
// 共用
var Warning_Common_ConfirmDelete = "您確定要刪除此筆資料嗎?";
// 本人資料
var Warning_Basic_IDN = "您<身分證統一編號>檢查有誤，請確認！\n若<身分證統一編號>正確無誤，請按<確定>\n鈕，繼續進行；若錯誤，請按<取消>鈕，重\n新登入．";
// 基本資料畫面
var Warning_Basic_BIRTH = "本人出生年小於20歲，請確認是否正確!";
var Warning_Basic_SpousIDN = "配偶國民身分證統一編號不合邏輯檢查，請確認是否正確!";
// 親屬資料
var Warning_Depnt_IDN = "身分證統一編號不符合國民身分證統一編號或外僑身分證統一編號邏輯檢查，請確認是否正確!";
var Warning_Depnt_MainLandIDN = "身分證統一編號不符合大陸身分證統一編號邏輯檢查，請確認是否正確!";
// 所得資料
var Warning_Incom_TooManyIncomItem = "您所輸入的所得人數已達九人，超出輸入的所得資料將無法採用薪資特別扣除額.";
var Warning_Incom_WH_TAX3 = "扣繳稅額大於扣繳率%. 請您確認輸入資料無誤.";
var Warning_Incom_WH_TAX4 = "可扣抵稅額大於可扣抵率%. 請您確認輸入資料無誤..";
// 【Error 錯誤訊息】
// 主執行畫面
var Error_CodeCRC = "代碼檔CRC檢查錯誤，檔案可能已經損毀，請重新下載代碼檔案，或重新安裝系統.";
var Error_No_Help = "您的電腦尚未安裝說明檔，請於Itax網路報繳稅主機下載綜合所得稅網際網路申報系統說明檔，謝謝!";
var Error_OverTime = "已經超過網際網路申報期限(民國%s), 請改採人工方式申報.";
// 輸出入
var Error_IO_Upload_CreateData = "申報資料上傳失敗，無法產生上傳封包資料.";
var Error_IO_Upload_CreateSeal = "申報資料上傳失敗，無法產生加密資料.";
var Error_IO_Upload_ReadData = "申報資料上傳失敗，下載之資料格式不符.";
var Error_IO_Upload_Error = "申報資料上傳失敗，錯誤原因如下:\n\n%s";
var Error_IO_NetLinkError = "網際網路連線失敗! 請檢查您的TCP/IP網路設定值是否無誤.\n\n如果您是使用Modem撥接的用戶，請您檢查是否已啟動連線作業.\n\n如果您是使用區域網路的用戶，並且此一網路已被防火牆保護，請確認您的Proxy代理伺服器設定值無誤.";
var Error_IO_TimeOut = "網路作業逾時，可能現在網際網路線路繁忙，請稍待一會兒，再執行網路作業.";
var Error_IO_Cancel = "使用者取消網際網路傳輸作業!";
var Error_IO_Upload = "申報資料上傳失敗，可能現在網際網路線路繁忙，請稍待一會兒，再次執行上傳作業.";
var Error_IO_Upload_Custom = "申報資料上傳失敗，錯誤原因如下:\n\n%s";
var Error_IO_Upload_Cancel = "申報資料上傳作業被使用者取消.";
var Error_IO_LoadFile_ErrorCRC = "申報資料檔案%s已經損壞，請讀取其他檔案，或請重新建立申報資料.";
var Error_IO_LoadFile_ErrorRead = "讀取申報資料檔案'%s'失敗，請檢查您的磁碟機是否可以正常讀取.";
var Error_IO_LoadFile_ErrorIDN = "資料檔案'%s'不是您本人的申報資料，請重新讀取其他檔案.";
var Error_IO_SaveFile = "儲存檔案%s失敗，可能系統資源不足，請於結束其他應用程式後，或於重新開機後，再試一次.";
var Error_IO_SaveFile_ErrorSave = "儲存申報資料檔案'%s'失敗，請檢查您的磁碟機是否正常，或者是否有足夠空間.";
var Error_IO_CheckVersion = "檢查版本失敗，無法取得最新版本資訊，請稍待一會兒，再次執行版本檢查.";
var Error_IO_NetLinkTest = "測試網際網路連線失敗! 請檢查您的TCP/IP網路設定值是否無誤.\n\n如果您是使用Modem撥接的用戶，請您檢查是否已啟動連線作業.\n\n如果您是使用區域網路的用戶，並且此一網路已被防火牆保護，請確認您的Proxy代理伺服器設定值無誤.";
var Error_IO_NetLinkTestCancel = "使用者取消網際網路連線測試作業!";
var Error_IO_CanNotWriteRegistry = "無法寫入Registry資料，系統將無法紀錄重要資訊，請確認您有足夠的寫入權限.";
// 登入畫面
var Error_Startup_Name = "申報人姓名不可為空白，請重新輸入.";
var Error_Startup_Houhld = "申報人戶號不可為空白.";
// 基本資料畫面
var Error_Basic_BIRTH = "本人出生年錯誤，請重新輸入.";
var Error_Basic_IDN = "本人國民身分證統一編號格式錯誤，請重新輸入.";
var Error_Basic_SpousIDN = "配偶國民身分證統一編號格式錯誤，請重新輸入.";
var Error_Basic_SpousIDNDup = "配偶國民身分證統一編號與本人或親屬的身分證統一編號重複，請重新輸入.";
var Error_Basic_IDNDup = "納稅義務人與配偶之身分證統一編號，除第二位不同，其餘相同，錯誤，請重新輸入.";
var Error_Basic_SPOUS_BIRTH = "配偶出生年錯誤，請重新輸入.";
var Error_Basic_SpousData = "配偶資料輸入不完整，請重新輸入.";
var Error_Basic_TelD1 = "電話(日)號碼的區域碼錯誤，請重新輸入.";
var Error_Basic_TelD2 = "電話(日)號碼錯誤，請重新輸入.";
var Error_Basic_TelN1 = "電話(夜)號碼的區域碼錯誤，請重新輸入.";
var Error_Basic_TelN2 = "電話(夜)號碼錯誤，請重新輸入.";
var Error_Basic_LIN = "地址'鄰'資料錯誤，請重新輸入.";
var Error_Basic_COMU_LIN = "地址'鄰'資料錯誤，請重新輸入.";
var Error_Basic_EMAIL = "電子郵件信箱資料錯誤，請重新輸入.";
var Error_Basic_BIRTH_Less20 = "納稅義務人本人，未滿二十歲，且未婚者，不得單獨申報！";

// 親屬資料
var Error_Depnt_IDN = "身分證統一編號不符合國民身分證統一編號或外僑身分證統一編號格式，請重新輸入.";
var Error_Depnt_IDN2 = "身分證統一編號不符合國民身分證統一編號或外僑身分證統一編號邏輯檢查，請重新輸入.";
var Error_Depnt_MainLandIDN = "身分證統一編號不符合大陸身分證統一編號格式，請重新輸入.";
var Error_Depnt_MainLandIDN2 = "身分證統一編號不符合大陸身分證統一編號邏輯檢查，請重新輸入.";
var Error_Depnt_IDNDup = "親屬國民身分證統一編號與本人、配偶或親屬的身分證統一編號重複，請重新輸入.";
var Error_Depnt_YR = "親屬出生年錯誤，請重新輸入.";
var Error_Depnt_NoSupport1 = "未年滿六十歲之直系尊親屬不得列報扶養.";
var Error_Depnt_NoSupport2 = "已年滿二十歲之直系卑親屬不得列報扶養.";
var Error_Depnt_NoSupport3 = "父或母為現役軍人、托兒所、幼稚園或公私立國民中小學的教職員，不得列報扶養.";
var Error_Depnt_NoSupport4 = "該(親)家屬已年滿二十歲未滿六十歲或年齡不符，不得列報扶養.";
var Error_Depnt_NoSupport5 = "該(親)家屬未與納稅義務人本人或配偶同居，不得列報扶養.";
var Error_Depnt_NoSupport6 = "該(親)家屬雖已年滿六十歲但非無謀生能力者，不得列報扶養.";
var Error_Depnt_NoSupport7 = "已年滿二十歲之兄弟姊妹不得列報扶養.";

// 所得資料
var Error_Incom_WH_TAX1 = "扣繳稅額不可大於收入總額，請重新輸入.";
var Error_Incom_WH_TAX2 = "扣繳稅額不可大於所得總額，請重新輸入.";
var Error_Incom_WH_TAX3 = "扣繳稅額大於扣繳率%s％，請重新輸入正確資料，或請您改用人工申報方式.";
var Error_Incom_WH_TAX4 = "可扣抵稅額大於可扣抵率%s％，請重新輸入正確資料，或請您改用人工申報方式.";
var Error_Incom_BAN = "扣繳單位統一編號邏輯檢查錯誤，請重新輸入.";
var Error_Incom_BAN_LOSN = "至少要輸入%s或%s，請重新輸入.";
var Error_Incom_LOSN = "尚未輸入%s，請重新輸入.";

// 列舉扣除
var Error_Deduct_DED_TP = "已有自用住宅購屋借款利息之列舉扣除資料，不得再次輸入.";

// 扣除額
var Error_Deduct_Total_PROP = "財產交易損失扣除額以不超過財產交易所得總額%為限，請重新輸入.";
var Error_Deduct_Total_EDU = "教育學費特別扣除額以不超過25000元為限，請重新輸入.";
var Error_Deduct_Total_Disab = "殘障特別扣除額人數，以不超過總申報扶養人數";
// <申報戶總人數>為限，請重新輸入.

// 投資抵減
var Error_Invest_GetYR = "抵減起始年度應於%s年之前，請重新輸入.";
var Error_Invest_BAN = "發行公司統一編號邏輯檢查錯誤，請重新輸入.";
var Error_Invest_PREV_CTX = "往年已抵減稅額不可大於可抵減稅額，請重新輸入.";
var Error_Invest_ZSY_CTX = "本年抵減稅額不可大於尚未抵減稅額，請重新輸入.";
var Error_Invest_T_CTX = "可抵減稅額以繳納股款的%s％為限，請重新輸入.";
var Error_Invest_Docu_Error = "核準日期之年度,不可大於抵減起始年度，請重新輸入.";

// 重購自用住宅
var Error_Rehouse_PRE_AMT = "出售年度應納稅額含自用住宅之財產交易所得之金額不應低於不含自用住宅之財產交易所得，請重新輸入.";
var Error_Rehouse_SALE_YR1 = "出售年度或重購年度必須為申報年度，請重新輸入.";
var Error_Rehouse_SALE_YR2 = "出售年度與重購年度不得相距兩年以上，請重新輸入.";
var Error_Rehouse_SALE_YR3 = "出售年度或重購年度不合理，請重新輸入.";
var Error_Rehouse_SALE_PRICE = "重購價格不得低於出售價格，請重新輸入.";
var Error_Rehouse_CheckIncom = "您必須有一筆以上的財產交易所得，才能輸入出售年度為今年度重購自用住宅之資料. 請重新輸入.";

// 大陸地區所得
var Error_Mainland_B = "含大陸地區來源所得之應納稅額不應低於不含大陸地區來源所得之應納稅額. 請重新輸入.";

// 計算及上傳
var Error_CalcAll_AcctLen = "帳號長度應為%s位數，請重新輸入.";
var Error_CalcAll_VerifyAcctFail = "無法確認金融機構帳號，請於重新輸入金融機構帳號後再次上傳.";
var Error_CalcAll_AcctError = "金融機構帳號錯誤，請重新輸入.";
var Error_CalcAll_NameError = "存款人姓名錯誤,請重新輸入.";
var Error_CalcAll_NotOnlinePayTax = "您已使用過[線上繳稅]方式繳稅，將不可改使用[繳稅取款委託書]或[信用卡]繳稅.";
var Error_CalcAll_NotCreditPayTax = "您已使用過[信用卡]方式繳稅，將不可改使用[線上繳稅]繳稅，請改以[繳稅取款委託書]繳稅.";
var Error_CalcAll_NotCreditPayAgain = "您已使用過[信用卡]方式繳稅成功，依財政部規定透過信用卡繳納綜合所得稅自繳稅款，同一個身分證統一編號僅能繳納一次，若仍有應補稅額，請改以[繳稅取款委託書]繳稅.";
var Error_CalcAll_GCAError = "憑證檢核錯誤,請洽中華電信.";
var Error_CalcAll_UploadError = "本日上傳'戶號+身分證統一編號比對錯誤'超過五次，請明日再試.";

// 整體檢查
var Error_Check_Page1_1 = "基本資料之本人資料不完整，請重新輸入.";
var Error_Check_Page1_2 = "基本資料之配偶資料不完整，請重新輸入.";
var Error_Check_Page1_3 = "基本資料之申報時戶籍地資料不正確，請重新輸入.";
var Error_Check_Page1_4 = "基本資料之通訊處/住居所資料不正確，請重新輸入.";
var Error_Check_Page1_5 = "基本資料之電話(日)資料不正確，請重新輸入.";
var Error_Check_Page1_6 = "基本資料之電子郵件資料不正確，請重新輸入.";
var Error_Check_Page2_1 = "扶養親屬之親屬資料不完整，請重新輸入.";
var Error_Check_Page2_2 = "扶養親屬之稱謂資料不正確，請重新輸入.";
var Error_Check_Page3_1 = "所得資料之所得資料不完整，請重新輸入.";
var Error_Check_Page3_2 = "所得資料之所得類別不正確，請重新輸入.";

var Error_Check_Page3_3 = "您至少需輸入一筆以上所得總額大於0之所得資料.";
var Error_Check_Page4_1 = "列舉扣除之列舉扣除資料不完整，請重新輸入.";
var Error_Check_Page4_2 = "列舉扣除之列舉扣除種類不正確，請重新輸入.";

// 報表
var Error_Print_FileNotFound = "報表檔案不存在，可能是您尚未在這台電腦上申報成功過，亦有可能是報表檔案已經損毀，您可重新採用申報方式建立報表檔案.";
var Error_Print_CanNotCreateReport = "報表作業失敗，可能是您的電腦記憶體或硬碟資源不足，請您於重新開機後再次執行本系統.";
var Error_Print_FileLock = "報表作業失敗，可能是您的硬碟資源不足或是檔案被設為唯讀，請您於重新開機後再次執行本系統.";

// 切換檔案
var Error_Change_SpousIDNError = "配偶為外僑，不適用本系統，請改採外僑結算申報書，辦理人工申報.";
var Error_Change_SpousIDNError2 = "配偶為大陸地區人民身分，依規定大陸地區人民有台灣地區來源所得，應採就源扣繳，免辦理結算申報，但可合併與台灣之納稅義務人結算申報書內，申報配偶";

/*
 * 1. 檢查日期 2. 檢查身分證字號邏輯 3. 消除字串中的空白與斷行等 4. 檢查統一編號邏輯 5. 設定Select元件預設選項 6.
 * 判斷是否為欄位值數字 7. 民國年轉成西元年 8. 西元年轉成民國年 9. 日期補滿(結果呈現在欄位上) 10.日期補滿(結果回傳) 11.閏年判斷
 * 12.檢查統一編號邏輯 13.setDefault代出下拉選單的value
 */

function getListIndex( listElement ) {
    // 判斷 是否有點選List
    var j = 0;
    var result = false;
    if (document.getElementById) {
        var what = document.getElementById('listForm').elements;
        for ( var i = 0; i < what.length; ) {
            if ( what[i].checked ) {
                result = true ;
                break;
            }
            i += listElement;
            j += 1;
        }
    }
    return result ;
}

function setDefault( list, value ) {
    for ( var i = 0; i < list.options.length; i++ ) {
        if ( list.options[i].value == value ) {
            list.options[i].selected = true;
            break;
        }
    }
}

function closeFWin(form) {
    form.target = "_parent";
    form.action = 'index.jsp' ;
    form.submit();
}

function openFile(form) {

    form.target = "mainFrame";
    form.action = 'UploadSelectTOP.jsp' ;
    form.submit();
}

// 戶號 in frame
function goCheckHouhld_pfn(form) {
    if (trimString(getIrc00Houhld_pfn()) != "") {
        if (confirm("戶號完成檢核!!您要在檢核一次??")) {
            window.open("CheckHouhld_pfn.jsp?idn=" + getIrc01IDN() , "CheckHouhld_pfn", "width=460,height=320,left=50,top=50");
        } else {
            return ;
        }
    } else {
        window.open("CheckHouhld_pfn.jsp?idn=" + getIrc01IDN() , "CheckHouhld_pfn", "width=460,height=320,left=50,top=50");
    }
}

// 收入代號與中文對照

function getIncom0(incm_cn, incm_fmt) {
    incm_cn = trimString(incm_cn) ;
    incm_fmt = trimString(incm_fmt);
    var typeDef = "&nbsp;";

    if (incm_cn == "3") {
        typeDef = "薪資所得";
    } else if (incm_cn == "4") {
        typeDef = "利息所得";
    } else if (incm_cn == "1") {
        typeDef = "營利所得(含股利或盈餘)";
    } else if (incm_cn == "5") {
        if ((incm_fmt.substring(0, 2) == "51") || (incm_fmt == "541") || (incm_fmt == "542"))
            typeDef = "租賃所得";
        else if ((incm_fmt.substring(0, 2) == "53") || (incm_fmt == "543") || (incm_fmt == "544"))
            typeDef = "權利金所得";
    } else if (incm_cn == "6") {
        typeDef = "自力耕作、漁、牧、林、礦所得";
    } else if (incm_cn == "2") {
        if (incm_fmt.substring(0, 2) == "9A") {
            typeDef = "執行業務所得";
        } else if (incm_fmt.substring(0, 2) == "9B") {
            typeDef = "著作人、稿費、版稅、鐘點費等";
        }
    } else if (incm_cn == "7") {
        typeDef = "財產交易所得";
    } else if (incm_cn == "8") {
        typeDef = "競技、競賽及機會中獎獎金";
    } else if (incm_cn == "9") {
        typeDef = "退職所得";
    } else if (incm_cn == "A") {
        typeDef = "其他所得";
    }
    return typeDef;
}
function getBasIncom0(incm_cn, incm_fmt, incm_no) {
    incm_cn = trimString(incm_cn) ;
    incm_fmt = trimString(incm_fmt);
    incm_no = trimString(incm_no);
    // alert(incm_cn+","+incm_fmt+"," + incm_no) ;
    var typeDef = "&nbsp;";

    if (( incm_cn == "A" && incm_fmt == "78") ||
    ( incm_cn == "A" && incm_fmt == "78D")) {
        typeDef = "特定保險給付";
    } else if (( incm_cn == "7" && incm_fmt == "76V") ||
    ( incm_cn == "7" && incm_fmt == "76S") ||
    ( incm_cn == "7" && incm_fmt == "76U")) {
        typeDef = "有價證券交易所得";
    } else if ( incm_cn == "3" && incm_fmt == "50E" ) {
        typeDef = "員工分紅配股";
    } else if ( incm_cn == "" && incm_no == "XX" ) {
        typeDef = "以前年度之有價證券交易損失扣除金額";
    } else if (( incm_cn == "1" && incm_fmt == "71" ) ||
    ( incm_cn == "2" && incm_fmt == "72" ) ||
    ( incm_cn == "3" && incm_fmt == "50" ) ||
    ( incm_cn == "4" && incm_fmt == "73" ) ||
    ( incm_cn == "5" && incm_fmt == "74" ) ||
    ( incm_cn == "6" && incm_fmt == "75" ) ||
    ( incm_cn == "7" && incm_fmt == "76" ) ||
    ( incm_cn == "8" && incm_fmt == "91" ) ||
    ( incm_cn == "9" && incm_fmt == "93" ) ||
    ( incm_cn == "A" && incm_fmt == "77" )) {
        typeDef = "海外所得" ;
    } else {
        typeDef = "申報綜合所得稅減除之非現金捐贈";
    }
    return typeDef;
}
// 檢查所有身分(本國,外僑,大陸)身分證=============//
function checkIDNAll(IDN) {
    var idn = IDN.value;
    if ( (!checkLogTWId(idn) &&
    !CheckFRGFormat(idn) && !CheckFRG(idn) && !CheckFRGFormat2(idn) &&
    !CheckMainLandID(idn) ) ) {
        IDN.focus();
        return false;
    } else {
        return true ;
    }
}
// 檢查身分非本國---->外僑用=============//
function checkIdnFRg(IDN) {
    var idn = IDN;
    // idn =idn.toUpperCase();
    if ( !CheckFRGFormat(idn) && !CheckFRG(idn) && !CheckFRGFormat2(idn) ) {
        return false;
    } else {
        return true ;
    }
}

// 檢查身分(本國,外僑)身分證=============//
function checkIDNTwFrg(IDN) {
    var idn = IDN;
    if ( !checkLogTWId(idn) &&
    !CheckFRGFormat(idn) && !CheckFRG(idn) && !CheckFRGFormat2(idn) ) {
        return false;
    } else {
        return true ;
    }
}

// 檢查身分(大陸)身分證=============//
function checkIDNMainLand(IDN) {
    var idn = IDN;
    if ( !CheckMainLandID(idn)) {
        return false;
    } else {
        return true ;
    }
}
// 檢查身分非本國---->外僑或大陸地區身分證 for 配偶用=============//
function checkSpous_IdnFRGMainLand(IDN) {
    var idn = IDN.value;
    if ( !CheckFRGFormat(idn) && !CheckFRG(idn) && !CheckFRGFormat2(idn) ) {
        return false;
    } else {
        return true ;
    }
}

// 檢查身分非本國---->大陸地區身分證 for 配偶用=============//
function checkSpous_IdnGMainLand(IDN) {
    var idn = IDN.value;;
    if ( !checkIDNMainLand(idn) ) {
        return false;
    } else {
        return true ;
    }
}

// 檢查身分非本國---->外僑身分證 for 配偶用=============//
function checkSpous_IdnFRg(IDN) {
    var idn = IDN.value;
    if ( !CheckFRGFormat(idn) && !CheckFRG(idn) && !CheckFRGFormat2(idn) ) {
        return false;
    } else {
        return true ;
    }
}
// 檢查身分非本國---->外僑身分證 for 都可用=============//
function check_IdnFRg(IDN) {
    var res = false; // 若為外僑或大陸人士回false
    var idn = trimString(IDN);
    idn = idn.toUpperCase();
    if (!CheckFRGFormat(idn) && !CheckFRG(idn) && !CheckFRGFormat2(idn) && (!checkIDNMainLand(idn)) ) {
        res = true ; // 本國籍
    }
    return res ;
}
function checkTWId(TId) {
    // 單純簡查IDN 格式 在登入時用到
    var Id = TId.charAt(0);
    var Falg = "";
    if (TId.length != 10) {
        return false;
    } else if (Id < 'A' || Id > 'Z') {
        return false;
    } else if ( ( TId.charAt(1) != '1' ) && ( TId.charAt(1) != '2' ) ) {
        return false;
    } else {
        return true;
    }
}
function checkLogTWId(TId) {
    // 格式基本要pass logic可以略過 在配偶跟扶養人用到
    var Id = TId.charAt(0);
    var Falg = "";
    if (TId.length != 10) {
        return false;
    } else if (Id < 'A' || Id > 'Z') {
        return false;
    } else if ( ( TId.charAt(1) != '1' ) && ( TId.charAt(1) != '2' ) ) {
        return false;
    }

    var Id = TId.charAt(0);
    var Falg = "";
    var val = new Array(11);

    for ( i = 1; i <= 9; i++)
        val[i + 1] = parseInt(TId.charAt(i));

    if (Id == 'A') {
        val[0] = 1;
        val[1] = 0;
    } else if (Id == 'B') {
        val[0] = 1;
        val[1] = 1;
    } else if (Id == 'C') {
        val[0] = 1;
        val[1] = 2;
    } else if (Id == 'D') {
        val[0] = 1;
        val[1] = 3;
    } else if (Id == 'E') {
        val[0] = 1;
        val[1] = 4;
    } else if (Id == 'F') {
        val[0] = 1;
        val[1] = 5;
    } else if (Id == 'G') {
        val[0] = 1;
        val[1] = 6;
    } else if (Id == 'H') {
        val[0] = 1;
        val[1] = 7;
    } else if (Id == 'I') {
        val[0] = 3;
        val[1] = 4;
    } else if (Id == 'J') {
        val[0] = 1;
        val[1] = 8;
    } else if (Id == 'K') {
        val[0] = 1;
        val[1] = 9;
    } else if (Id == 'L') {
        val[0] = 2;
        val[1] = 0;
    } else if (Id == 'M') {
        val[0] = 2;
        val[1] = 1;
    } else if (Id == 'N') {
        val[0] = 2;
        val[1] = 2;
    } else if (Id == 'O') {
        val[0] = 3;
        val[1] = 5;
    } else if (Id == 'P') {
        val[0] = 2;
        val[1] = 3;
    } else if (Id == 'Q') {
        val[0] = 2;
        val[1] = 4;
    } else if (Id == 'R') {
        val[0] = 2;
        val[1] = 5;
    } else if (Id == 'S') {
        val[0] = 2;
        val[1] = 6;
    } else if (Id == 'T') {
        val[0] = 2;
        val[1] = 7;
    } else if (Id == 'U') {
        val[0] = 2;
        val[1] = 8;
    } else if (Id == 'V') {
        val[0] = 2;
        val[1] = 9;
    } else if (Id == 'W') {
        val[0] = 3;
        val[1] = 2;
    } else if (Id == 'X') {
        val[0] = 3;
        val[1] = 0;
    } else if (Id == 'Y') {
        val[0] = 3;
        val[1] = 1;
    } else if (Id == 'Z') {
        val[0] = 3;
        val[1] = 3;
    }

    var check = 0;
    check = (val[1] * 9 + val[0])%10;
    for ( i = 2; i <= 9; i++)
        check += val[i] * (10 - i);

    var remainder = check % 10;
    remainder = remainder + val[10];
    if ( (remainder % 10) == 0) {
        return true;
    } else {
        agree = confirm("身分證不正確，是否要繼續?");
        if (!agree) {
            return false;
        } else {
            return true;
        }
    }
}
function checkCreditTWId(TId) {
    // Chek TwIdn 信用卡繳稅時用到

    var Id = TId.charAt(0);
    var Falg = "";
    if (TId.length != 10) {
        return false;
    } else if (Id < 'A' || Id > 'Z') {
        return false;
    } else if ( ( TId.charAt(1) != '1' ) && ( TId.charAt(1) != '2' ) ) {
        return false;
    }

    var Id = TId.charAt(0);
    var Falg = "";
    var val = new Array(11);

    for ( i = 1; i <= 9; i++)
        val[i + 1] = parseInt(TId.charAt(i));


    if (Id == 'A') {
        val[0] = 1;
        val[1] = 0;
    } else if (Id == 'B') {
        val[0] = 1;
        val[1] = 1;
    } else if (Id == 'C') {
        val[0] = 1;
        val[1] = 2;
    } else if (Id == 'D') {
        val[0] = 1;
        val[1] = 3;
    } else if (Id == 'E') {
        val[0] = 1;
        val[1] = 4;
    } else if (Id == 'F') {
        val[0] = 1;
        val[1] = 5;
    } else if (Id == 'G') {
        val[0] = 1;
        val[1] = 6;
    } else if (Id == 'H') {
        val[0] = 1;
        val[1] = 7;
    } else if (Id == 'I') {
        val[0] = 3;
        val[1] = 4;
    } else if (Id == 'J') {
        val[0] = 1;
        val[1] = 8;
    } else if (Id == 'K') {
        val[0] = 1;
        val[1] = 9;
    } else if (Id == 'L') {
        val[0] = 2;
        val[1] = 0;
    } else if (Id == 'M') {
        val[0] = 2;
        val[1] = 1;
    } else if (Id == 'N') {
        val[0] = 2;
        val[1] = 2;
    } else if (Id == 'O') {
        val[0] = 3;
        val[1] = 5;
    } else if (Id == 'P') {
        val[0] = 2;
        val[1] = 3;
    } else if (Id == 'Q') {
        val[0] = 2;
        val[1] = 4;
    } else if (Id == 'R') {
        val[0] = 2;
        val[1] = 5;
    } else if (Id == 'S') {
        val[0] = 2;
        val[1] = 6;
    } else if (Id == 'T') {
        val[0] = 2;
        val[1] = 7;
    } else if (Id == 'U') {
        val[0] = 2;
        val[1] = 8;
    } else if (Id == 'V') {
        val[0] = 2;
        val[1] = 9;
    } else if (Id == 'W') {
        val[0] = 3;
        val[1] = 2;
    } else if (Id == 'X') {
        val[0] = 3;
        val[1] = 0;
    } else if (Id == 'Y') {
        val[0] = 3;
        val[1] = 1;
    } else if (Id == 'Z') {
        val[0] = 3;
        val[1] = 3;
    }

    var check = 0;
    check = (val[1] * 9 + val[0])%10;
    for ( i = 2; i <= 9; i++)
        check += val[i] * (10 - i);

    var remainder = check % 10;
    remainder = remainder + val[10];
    if ( (remainder % 10) == 0) {
        return true;
    } else {
        return false;
    }
}

function CheckFRGFormat( idn ) {
    // 外僑
    idn = "" + idn;
    if ( (idn.length == 10) && CheckAllNumber(idn.substring(2, 10)) && CheckUpEng(idn.charAt(0)) && (idn.charAt(1) == "C" || idn.charAt(1) == "D") ) {
        return true ;
    } else {
        return false ;
    }
}
function checkdateForIDN(date)
{
    startdate = date;
    startdate = trimString(startdate);
    if (isNaN(Math.abs(startdate)))
    {
        return false;
    }
    if (startdate.substring(0, 2) == '00') {
        return false;
    }
    if (startdate.length < 8 && startdate.length > 4)
        startdate = (Math.abs(startdate.substring(0, startdate.length - 4)) + 1911) + startdate.substring(startdate.length - 4, startdate.length);
    else if (startdate.length >= 8)
        startdate = (Math.abs(startdate.substring(0, startdate.length - 4))) + startdate.substring(startdate.length - 4, startdate.length);
    else {
        return false;
    }
    if (!fnValidDate(startdate))
    {
        return false;
    }
    return true;
}
function CheckFRGFormat2( idn ) {
    idn = "" + idn;
    if ( (idn.length == 10) && CheckAllNumber(idn.substring(0, 8)) && CheckUpEng(idn.charAt(8)) && CheckUpEng(idn.charAt(9)) && checkdateForIDN(idn.substring(0, 8)) ) {
        return true ;
    } else {
        return false ;

    }

}
function CheckUpEng(Id) {
    if (Id < 'A' || Id > 'Z') {
        return false;
    } else {
        return true;
    }
}
// 2002/07/31 再修外僑檢核條件（中心傅萬鵬e_mail檢核格式）：
// 一、第一位英文字母之處理方式與本國人國民身分證統一編號相同
// 二、找出第二位英文字母的對應數值，取其個位數
// 三、經前述步驟將第一、二位英文字母轉換後，產生一個十位數字的數列
// 四、其餘檢查方式與本國人國民身分證統一編號檢查法之步驟四至步驟七相同
function CheckFRG( idn ) {

    var myIdn = idn;
    var X;
    var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numeric = "0123456789";
    var index;
    var ShiftKey = new Array( 10, 11, 12, 13, 14, 15, 16, 17, 34, 18, 19, 20, 21, 22, 35, 23, 24, 25, 26, 27, 28, 29, 32, 30, 31, 33 );
    var UnitKey = new Array( 0, 1, 2, 3, 4, 5, 6, 7, 4, 8, 9, 0, 1, 2, 5, 3, 4, 5, 6, 7, 8, 9, 2, 0, 1, 3 );
    var result = false;

    if ( idn.length != 10 )
        result = false;
    if ( (index = alpha.indexOf(myIdn.charAt(0))) == - 1 )
        return false;

    X = ShiftKey[index];

    X = Math.floor( X / 10 ) + 9 * (X % 10) + 8 * UnitKey[alpha.indexOf(myIdn.charAt(1))] +
    7 * numeric.indexOf(myIdn.charAt(2)) + 6 * numeric.indexOf(myIdn.charAt(3)) +
    5 * numeric.indexOf(myIdn.charAt(4)) + 4 * numeric.indexOf(myIdn.charAt(5)) +
    3 * numeric.indexOf(myIdn.charAt(6)) + 2 * numeric.indexOf(myIdn.charAt(7)) +
    numeric.indexOf(myIdn.charAt(8)) + numeric.indexOf(myIdn.charAt(9));
    if (eval(X % 10) == 0) {
        result = true;
    } else {
        result = false;
    }
    return result;
}
function CheckAllNumber( str ) {

    var numeric = "0123456789";
    var myStr = "" + str;

    for (var i = 0; i < myStr.length; i++ ) {
        if ( numeric.indexOf(str.charAt(i)) == - 1 )
            return false;
    }
    return true;
}
// 檢查大陸地區證號格式
function CheckMainLandIDFormat(idn) {
    var myIdn = "" + idn;
    var len = myIdn.length;
    if ( len == 10 || (len == 7 && myIdn.charAt(0) == "9"))
        return true;
    else
        return false;
}
// 檢查大陸地區證號
function CheckMainLandID(idn) {
    var myIdn = "" + idn;
    var len = myIdn.length;
    var result = false;
    if (CheckMainLandIDFormat(myIdn)) {
        if ( len == 7 ) {
            for ( var i = 19; i < 100; i++ ) {
                if (fnValidDate("" + i + myIdn.substring(1, 7))) {
                    result = true;
                    break;
                }
            }
        } else if ( len == 10 ) {
            if ( CheckUpEng(myIdn.charAt(0)) && (myIdn.charAt(1) == "A" || myIdn.charAt(1) == "B") && CheckAllNumber(myIdn.substring(2, 10)) ) {
                result = true;
            }
        }
    }
    return result;
}
// 檢查所有身分(本國,外僑,大陸)身分證===END=======//
// ======日期判斷=================================================
function fnValidDate(dateStr)
{
    var leap = 28;
    if (leapYear(parseInt(dateStr.substring(0, 4))) == 1)
        leap = 29;
    var tmp = parseInt(dateStr.substring(4, 6));
    if (dateStr.substring(4, 6) == '08')
        tmp = 8;
    if (dateStr.substring(4, 6) == '09')
        tmp = 9;
    if (tmp < 1 || tmp > 12)
    {
        return (false);
    }
    var monthTable = new Array(12);
    monthTable[1] = 31;
    monthTable[2] = leap;
    monthTable[3] = 31;
    monthTable[4] = 30;
    monthTable[5] = 31;
    monthTable[6] = 30;
    monthTable[7] = 31;
    monthTable[8] = 31;
    monthTable[9] = 30;
    monthTable[10] = 31;
    monthTable[11] = 30;
    monthTable[12] = 31;

    var dtmp = parseInt(dateStr.substring(6));
    if (dateStr.substring(6) == '08')
        dtmp = 8;
    if (dateStr.substring(6) == '09')
        dtmp = 9;

    if (dtmp < 1 || dtmp > monthTable[tmp])
    {
        return (false);
    }
    return (true);
}
// ======閏年判斷==================================================================
function leapYear (Year)
{
    if (((Year % 4) == 0) && ((Year % 100) != 0) || ((Year % 400) == 0))
        return (1);
    else
        return (0);
}
// =====檢查日期===========================================================
function checkdate(date) {
    return checkdate2( "" , date);
}
function checkdate2(name , date)
{
    startdate = date.value;
    startdate = trimString(startdate);
    if (isNaN(Math.abs(startdate)))
    {
        alert(name + "日期不可為文字");
        date.focus();
        return false;
    }
    if (startdate.substring(0, 2) == '00') {
        alert(name + "日期有誤");
        date.focus();
        return false;
    }
    if ((startdate.length < 8) && (startdate.length > 4))
        startdate = (Math.abs(startdate.substring(0, startdate.length - 4)) + 1911) + startdate.substring(startdate.length - 4, startdate.length);
    else if (startdate.length >= 8)
        startdate = (Math.abs(startdate.substring(0, startdate.length - 4))) + startdate.substring(startdate.length - 4, startdate.length);
    else {
        alert(name + "日期有誤");
        date.focus();
        return false;
    }
    if (!fnValidDate(startdate))
    {
        alert(name + "日期有誤");
        date.focus();
        return false;
    }
    return true;
}
//=======轉換日期格式 for ircWeb
function changeROCDATE(oring) {
    // YYY/MM/DD hh : mm : ss 20041214171944
    var YYY , MM , DD;
    var hh, mm , ss;
    oring = trimString(oring);
    if (oring != "" && oring.length >= 14 ) {
        YYY = oring.substring(0, 3);
        MM = oring.substring(3, 5);
        DD = oring.substring(5, 7);
        hh = oring.substring(8, 10);
        mm = oring.substring(10, 12);
        ss = oring.substring(12, 14);
        return YYY + "/" + MM + "/" + DD + "  " + hh + " : " + mm + " : " + ss;
    } else {
        return "";
    }
}

// =======轉換日期格式 for ircWeb
function changeMDYHMS(oring) {
    // YY/MM/DD hh : mm : ss 20041214171944
    var YY , MM , DD;
    var hh, mm , ss;
    oring = trimString(oring);
    if (oring != "" && oring.length >= 14 ) {
        YY = Math.abs(oring.substring(0, 4)) - 1911;
        MM = oring.substring(4, 6);
        DD = oring.substring(6, 8);
        hh = oring.substring(8, 10);
        mm = oring.substring(10, 12);
        ss = oring.substring(12, 14);
        return YY + "/" + MM + "/" + DD + "  " + hh + " : " + mm + " : " + ss;
    } else {
        return "";
    }
}

// =======轉換日期格式 for ircWeb
function changeMDYHM(oring) {
    // YY/MM/DD hh : mm 200412141719
    var YY , MM , DD;
    var hh, mm ;
    oring = trimString(oring);
    if (oring != "" && oring.length >= 12 ) {
        YY = Math.abs(oring.substring(0, 4)) - 1911;
        MM = oring.substring(4, 6);
        DD = oring.substring(6, 8);
        hh = oring.substring(8, 10);
        mm = oring.substring(10, 12);

        return YY + "/" + MM + "/" + DD + "  " + hh + " : " + mm;
    } else {
        return "";
    }

}
// =====檢查身分證字號邏輯===========================================================
function checkId(TId)
{
    var Id = TId.value.charAt(0);
    var Falg = "";
    if (TId.value.length != 10) {
        alert('身分證必須十個字母');
        TId.focus();
        return false;
    } else if (Id < 'A' || Id > 'Z') {
        alert('身分證第一個字母必須為英文字母');
        TId.focus();
        return false;
    } else if ( ( TId.value.charAt(1) != '1' ) && ( TId.value.charAt(1) != '2' ) ) {
        alert('身分證第二碼請輸入1或2');
        TId.focus();
        return false;
    }

    var val = new Array(11);

    for ( i = 1; i <= 9; i++)
        val[i + 1] = parseInt(TId.value.charAt(i));

    if (Id == 'A') {
        val[0] = 1;
        val[1] = 0;
    } else if (Id == 'B') {
        val[0] = 1;
        val[1] = 1;
    } else if (Id == 'C') {
        val[0] = 1;
        val[1] = 2;
    } else if (Id == 'D') {
        val[0] = 1;
        val[1] = 3;
    } else if (Id == 'E') {
        val[0] = 1;
        val[1] = 4;
    } else if (Id == 'F') {
        val[0] = 1;
        val[1] = 5;
    } else if (Id == 'G') {
        val[0] = 1;
        val[1] = 6;
    } else if (Id == 'H') {
        val[0] = 1;
        val[1] = 7;
    } else if (Id == 'I') {
        val[0] = 3;
        val[1] = 4;
    } else if (Id == 'J') {
        val[0] = 1;
        val[1] = 8;
    } else if (Id == 'K') {
        val[0] = 1;
        val[1] = 9;
    } else if (Id == 'L') {
        val[0] = 2;
        val[1] = 0;
    } else if (Id == 'M') {
        val[0] = 2;
        val[1] = 1;
    } else if (Id == 'N') {
        val[0] = 2;
        val[1] = 2;
    } else if (Id == 'O') {
        val[0] = 3;
        val[1] = 5;
    } else if (Id == 'P') {
        val[0] = 2;
        val[1] = 3;
    } else if (Id == 'Q') {
        val[0] = 2;
        val[1] = 4;
    } else if (Id == 'R') {
        val[0] = 2;
        val[1] = 5;
    } else if (Id == 'S') {
        val[0] = 2;
        val[1] = 6;
    } else if (Id == 'T') {
        val[0] = 2;
        val[1] = 7;
    } else if (Id == 'U') {
        val[0] = 2;
        val[1] = 8;
    } else if (Id == 'V') {
        val[0] = 2;
        val[1] = 9;
    } else if (Id == 'W') {
        val[0] = 3;
        val[1] = 2;
    } else if (Id == 'X') {
        val[0] = 3;
        val[1] = 0;
    } else if (Id == 'Y') {
        val[0] = 3;
        val[1] = 1;
    } else if (Id == 'Z') {
        val[0] = 3;
        val[1] = 3;
    }
    var check = 0;
    check = (val[1] * 9 + val[0])%10;
    for ( i = 2; i <= 9; i++)
        check += val[i] * (10 - i);

    var remainder = check % 10;
    remainder = remainder + val[10];
    if ( (remainder % 10) == 0) {
        return true;
    } else {
        agree = confirm("身分證統一編號不符合國民身分證統一編號格式，是否要繼續?");
        if (!agree)
        {
            TId.focus();
            return false;
        } else {
            return true;
        }
    }
}
// =====檢查身分證字號邏輯===========================================================
function checkIdWithMsg(TId, errMsg) // errMsg可帶入錯誤訊息
{
    var Id = TId.value.charAt(0);
    var Falg = "";
    if (TId.value.length != 10) {
        alert('身分證必須十個字母');
        TId.focus();
        return false;
    } else if (Id < 'A' || Id > 'Z') {
        alert('身分證第一個字母必須為英文字母');
        TId.focus();
        return false;
    } else if ( ( TId.value.charAt(1) != '1' ) && ( TId.value.charAt(1) != '2' ) ) {
        alert('身分證第二碼請輸入1或2');
        TId.focus();
        return false;
    }

    var val = new Array(11);

    for ( i = 1; i <= 9; i++)
        val[i + 1] = parseInt(TId.value.charAt(i));

    if (Id == 'A') {
        val[0] = 1;
        val[1] = 0;
    } else if (Id == 'B') {
        val[0] = 1;
        val[1] = 1;
    } else if (Id == 'C') {
        val[0] = 1;
        val[1] = 2;
    } else if (Id == 'D') {
        val[0] = 1;
        val[1] = 3;
    } else if (Id == 'E') {
        val[0] = 1;
        val[1] = 4;
    } else if (Id == 'F') {
        val[0] = 1;
        val[1] = 5;
    } else if (Id == 'G') {
        val[0] = 1;
        val[1] = 6;
    } else if (Id == 'H') {
        val[0] = 1;
        val[1] = 7;
    } else if (Id == 'I') {
        val[0] = 3;
        val[1] = 4;
    } else if (Id == 'J') {
        val[0] = 1;
        val[1] = 8;
    } else if (Id == 'K') {
        val[0] = 1;
        val[1] = 9;
    } else if (Id == 'L') {
        val[0] = 2;
        val[1] = 0;
    } else if (Id == 'M') {
        val[0] = 2;
        val[1] = 1;
    } else if (Id == 'N') {
        val[0] = 2;
        val[1] = 2;
    } else if (Id == 'O') {
        val[0] = 3;
        val[1] = 5;
    } else if (Id == 'P') {
        val[0] = 2;
        val[1] = 3;
    } else if (Id == 'Q') {
        val[0] = 2;
        val[1] = 4;
    } else if (Id == 'R') {
        val[0] = 2;
        val[1] = 5;
    } else if (Id == 'S') {
        val[0] = 2;
        val[1] = 6;
    } else if (Id == 'T') {
        val[0] = 2;
        val[1] = 7;
    } else if (Id == 'U') {
        val[0] = 2;
        val[1] = 8;
    } else if (Id == 'V') {
        val[0] = 2;
        val[1] = 9;
    } else if (Id == 'W') {
        val[0] = 3;
        val[1] = 2;
    } else if (Id == 'X') {
        val[0] = 3;
        val[1] = 0;
    } else if (Id == 'Y') {
        val[0] = 3;
        val[1] = 1;
    } else if (Id == 'Z') {
        val[0] = 3;
        val[1] = 3;
    }


    var check = 0;
    check = (val[1] * 9 + val[0])%10;
    for ( i = 2; i <= 9; i++)
        check += val[i] * (10 - i);

    var remainder = check % 10;
    remainder = remainder + val[10];
    if ( (remainder % 10) == 0) {
        return true;
    } else {
        agree = confirm(errMsg);
        if (!agree)
        {
            TId.focus();
            return false;
        } else {
            return true;
        }
    }
}

// ==========改變欄框背景顏色========================//
orgBGColor = "";
function chgcolorin(tr)
{
    orgBGColor = tr.style.backgroundColor;
    // tr.style.backgroundColor='EBE6EC';
    tr.style.backgroundColor = 'D6CBD8';
}
function chgcolorout(tr)
{
    tr.style.backgroundColor = orgBGColor;
}
// ==========變換圖片=================================//
function swap_img(swapObject, swappic)
{
    if (swapObject.bsrc == null)
        swapObject.bsrc = swappic;
    var temp = swapObject.src;
    swapObject.src = swapObject.bsrc;
    swapObject.bsrc = temp;
}
// ======消除字串中的空白與斷行等…===================//
function trimString(inString)
{
    var outString;
    var startPos;
    var endPos;
    var ch;

    // where do we start?
    startPos = 0;
    test = 0;
    inString += "";
    ch = inString.charAt(startPos);

    while ((ch == " ") || (ch == "\b") || (ch == "\f") || (ch == "\n") || (ch == "\r") || (ch == "\n")) {
        startPos++;
        if ( ch == " " ) {
            test++;
        }
        ch = inString.charAt(startPos);
    }
    if ( test == inString.length )
        flag = true;
    else
        flag = false;
    endPos = inString.length - 1;
    ch = inString.charAt(endPos);
    while ((ch == " ") || (ch == "\b") || (ch == "\f") || (ch == "\n") || (ch == "\r") || (ch == "\n")) {
        endPos--;
        ch = inString.charAt(endPos);
    }
    outString = inString.substring(startPos, endPos + 1);
    if ( flag == true )
        return "";
    else
        return outString;
}
// =====檢查統一編號邏輯======================================//
function checkBan(TBan)
{
    var Ban = trimString(TBan.value);
    var temp1 = 0;
    var temp2 = 0;
    var temp3 = 0;
    var temp4 = 0;
    var Flag = "";

    if (isNaN(Math.abs(TBan.value)))
    {
        alert("統一編號需全為數字");
        TBan.focus();
        return false;
    }
    var BanH = Ban.charAt(0);
    if (BanH == "-" || BanH == "+")
        TBan.value = Ban = Math.abs(Ban);

    if (Ban.length != 8)
    {
        alert("統一編號必須輸滿八個數字");
        TBan.focus();
        return false;
    }

    for (var i = 1; i <= 8; i++)
    {
        if ((i%2) > 0)
        {
            if (i == 7)
            {
                temp1 = Math.abs(Ban.substring(i - 1, i)) * 4;
                if (Math.abs(Ban.substring(i - 1, i)) == 7)
                    temp3 = temp1;
            } else
            {
                temp1 = Math.abs(Ban.substring(i - 1, i));
            }
        } else
        {
            if (i == 8)
                temp1 = Math.abs(Ban.substring(i - 1, i));
            else
                temp1 = Math.abs(Ban.substring(i - 1, i)) * 2;
        }
        if (temp1 >= 10)
        {
            temp4 = temp1 + "";
            temp2 = temp2 + Math.abs(temp4.substring(0, 1)) + Math.abs(temp4.substring(1, 2));

        } else
        {
            temp2 = temp2 + temp1;
        }
    }

    if ((temp2 % 10) > 0)
    {
        if (temp3 > 0)
        {
            if (temp3 > 10 )
            {
                temp4 = temp3 + "";
                temp2 = Math.abs(temp4.substring(0, 1)) + Math.abs(temp4.substring(1, 2));
                if ((temp2 % 10) > 0)
                    Flag = "Y";
            } else
            {
                Flag = "Y";
            }
        } else
        {
            Flag = "Y";

        }
    }

    if (Flag == "Y")
    {
        agree = confirm("統編不正確，是否要繼續?");
        if (!agree)
        {
            TBan.focus();
            return false;
        } else
        {
            return true;
        }
    } else
    {
        return true;
    }
}
// ==設定Select元件預設選項========//
function setSelect(S1, bankid)
{
    if (S1 == null)
        return;
    for (i = 0; i < S1.length; i++)
        if (S1.options[i].value == bankid)
        {
            S1.options[i].selected = true;
            break;
        }
}
// ====刪除與否確認訊息==============================//
function askDelete()
{
    if (confirm('是否要刪除資料？'))
        return true;
    else
        return false;
}
// ======頁面Change==================================//
function goWhere(where, form)
{
    if (form == null)
    {
        document.form.action = where;
        document.form.submit();
    } else
    {
        form.action = where;
        form.submit();
    }
}
// =======判斷是否為欄位值數字=========================================================
function checkNum(T1)
{
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    if (isNaN(Math.abs(T1.value)))
    {
        alert("請輸入數字");
        //T1.focus();
        return false;
    }
    if (eval(T1.value) < 0) {
        alert("請輸正整數");
        //T1.focus();
        return false;
    }
    return true;

}
function checkPercentageNum(T1) // 百分比 Percentage
{
    var len = 0 ;

    checkNum(T1);

    if ((pos = (T1.value).indexOf(".")) != - 1)
    {
        len = (T1.value).substring((T1.value).indexOf(".") + 1, T1.value.length);
        if (len.length > 2)
        {
            alert("小數點後只能有２個位數");
            return false;
        }
        len = (T1.value).substring(0, (T1.value).indexOf("."));
        if (len.length > 2)
        {
            alert("小數點前只能有２個位數");
            return false;
        }
    }
    return true;

}
// =======判斷變數是否為數字=========================================================
function checkValueNum(T1)
{
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    if (isNaN(Math.abs(T1)))
    {
        alert("請輸入數字");
        return false;
    }
    if (eval(T1) < 0) {
        alert("請輸正整數");
        return false;
    }
    return true;

}

// =======判斷pin.jsp變數是否為數字=========================================================
function checkpinValueNum(T1)
{
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    if (isNaN(Math.abs(T1)))
    {
        alert("請輸入數字或您輸入的數字為全形非半形數字!!");
        return false;
    }
    if (eval(T1) < 0) {
        alert("請輸正整數");
        return false;
    }
    return true;

}

// =======民國年轉成西元年=========================================================
function changeYMD(oring, tmp1)
{
    var tms1;
    var tms2;
    var tms3;
    var size = oring.length;
    tms1 = parseInt(oring.substring(0, size - 4)) + 1911;
    tms2 = oring.substring(size - 4, size - 2);
    tms3 = oring.substring(size - 2);

    if (tmp1 == 1)
        oring = tms1 + "/" + tms2 + "/" + tms3;
    else
        oring = tms1 + tms2 + tms3 + "";

    return oring;
}
// =======西元年轉成民國年=========================================================
function changeMDY(oring)
{
    var tms1;
    var tms2;
    var tms3;
    tms1 = Math.abs(oring.substring(0, 4)) - 1911;
    tms2 = oring.substring(4);
    oring = tms1 + tms2 + "";

    return oring;
}
// ====日期補滿(結果呈現在欄位上)======================================================
function addZeroField(DateValue)
{
    if (trimString(DateValue.value) == '')
    {
        return;
    } else if (!isNaN(Math.abs(DateValue.value)))
    {
        DateValue.value = Math.abs(DateValue.value);

        var max = DateValue.maxLength;
        if ((max == 7 && DateValue.value.length == 6) || (max == 5 && DateValue.value.length == 4) ||
        (max == 3 && DateValue.value.length == 2))
            DateValue.value = "0" + DateValue.value;
        else if ((max == 7 && DateValue.value.length == 5) || (max == 5 && DateValue.value.length == 3) ||
        (max == 3 && DateValue.value.length == 1))
            DateValue.value = "00" + DateValue.value;
        else if (max == 2 && DateValue.value.length == 1)
            DateValue.value = "0" + DateValue.value;
    }
}
// ==日期補滿(結果回傳)======================================================================
function addZero(DateValue)
{
    DateValue = "" + Math.abs(DateValue);

    if (DateValue.length == 6)
        DateValue = "0" + DateValue;
    else if (DateValue.length == 5)
        DateValue = "00" + DateValue;
    else if (DateValue.length == 4)
        DateValue = "0" + DateValue;
    else if (DateValue.length == 3)
        DateValue = "00" + DateValue;
    else if (DateValue.length == 2)
        DateValue = "0" + DateValue;
    if (DateValue.length == 1)
        DateValue = "00" + DateValue;
    return DateValue;
}
// ======================================================
function relativeSelect(sourceObject, targetObject, arrayMap)
{
    var index = sourceObject.value;
    for (var i = targetObject.options.length; i >= 0; i--)
        targetObject.options[i] = null;
    targetObject.options[0] = new Option("請選擇", "");
    var items = arrayMap.get(index);

    for (var i = 0; i < items.length / 2 ; i++)
        targetObject.options[targetObject.options.length] = new Option(items[i * 2 + 1], items[i * 2]);
}
// ============================================================
function ArrayMap()
{
    this.index = new Array();
    this.content = new Array();
    this.put = putElement;
    this.get = getElement;
}

function putElement(indexUnit, contentUnit)
{
    this.index[this.index.length] = indexUnit;
    this.content[this.content.length] = contentUnit;
}

function getElement(indexUnit)
{
    var j = - 1;
    for (var i = 0; i < this.index.length; i++)
    {
        if (this.index[i] == indexUnit)
        {
            j = i;
            break;
        }
    }

    if (j > - 1)
        return this.content[j];
    else
        return new Array();
}
// 取得父網頁的欄位上的值回傳，
// form_column : 需為 formName.columnName
// 此func不提供checkBox & radio的資料回傳，亦不接受陣列型態的物件
function getText(form_column)
{
    var htmObject = eval("opener.document." + form_column);
    var returnText = '&nbsp;';
    if (htmObject != null)
    {
        if (htmObject.tagName.toUpperCase() == 'SELECT')
        {
            if (htmObject.value != null)
            {
                returnText = htmObject.options[htmObject.selectedIndex].text;
                if (returnText.indexOf('請選擇') >= 0 )
                    returnText = '&nbsp;';
            }
        } else if (htmObject.tagName.toUpperCase() == 'INPUT')
        {
            if (htmObject.type.toUpperCase() == 'TEXT')
            {
                if (htmObject.value != null)
                    if (htmObject.value == '')
                        returnText = '&nbsp;';
                    else
                        returnText = htmObject.value;
            }
        } else if (htmObject.tagName.toUpperCase() == 'TEXTAREA')
        {
            if (htmObject.value != null)
                if (htmObject.value == '')
                    returnText = '&nbsp;';
                else
                    returnText = htmObject.value;
        }
    }
    return returnText;
}
// ===================================================//
function checkEMail(text) {
    var data;
    var textValue;
    textValue = text.value;
    data = textValue.match(/^\S+@\S+\.\D+$/);
    if (!data ) {
        alert("請輸入正確E-mail");
        text.focus();
        return false;
    }
    return true;
}
// =======================================
function fillBlank(strVar, totalLen)
{
    var strTmp = "";
    var iLen = strVar.length;
    for (var i = iLen; i < totalLen; i++)
        strTmp = strTmp + " ";
    return strVar + strTmp;
}

function trim( str )
{
    var ostr = '', len = str.length;

    for (var i = 0; i < len; i++ )
        ostr += (str.charAt(i) != ' ') ? str.charAt(i) : '';
    return ostr;
}

function getLength( str )
{
    var rlen = 0, len = str.length;

    for ( var i = 0; i < len ; i++ )
    {
        rlen++;
        if ( escape( str.charAt(i) ).length > 4 )
            rlen++;
    }
    return rlen;
}

function getLengthIE(str) // Unicode, only for IE
{
    return (str.length + (escape(str) + "%u").match(/%u/g).length - 1);
}
function subS( str, start, last ) {
    var rlen = 0, len = str.length, chr, lchr, rchr;
    var first = false;
    var result = "", index;
    var twoByteStep = (escape("洪").indexOf("%u") == - 1 ? 3 : 4);

    for ( var i = 0; i < len; i++ ) {

        chr = escape( str.charAt(i) );
        if ( chr.length > twoByteStep ) // two bytes
        index = 2;
        else
            index = 1;

        if ( rlen >= start ) {
            if ( rlen + index > last ) {
                if ( index == 2 )
                    result += " "; // 中文字切一半
                break;
            } else {
                result += str.charAt(i);
            }
        } else if ( rlen + index > start ) {
            result += " "; // 中文字切一半
        }
        rlen += index;
    }
    return result;
}

function removeSpace(str, num)
{
    var tempstr = "";

    for (var i = 0; i < num; i++)
    {
        if (str.charAt(i) != " ")
        {
            tempstr += str.charAt(i);
        }
    }
    return tempstr;
}

function getAmountStr( sAmount )
{
    var sInt = "", sDec = "", sTemp = "";
    var last = 0, i = 0, len = 0;

    len = sAmount.length;

    for (i = 0; i < len; i++)
    {
        if ( (sAmount.charAt(i) >= '0' && sAmount.charAt(i) <= '9') || sAmount.charAt(i) == '.' )
            sTemp += sAmount.charAt(i);
    }

    if ( (last = sTemp.indexOf(".")) != - 1)
    {
        sInt = sTemp.substring(0, last);
        sDec = sTemp.substring(last, sTemp.length);
    } else
        sInt = sTemp;

    sAmount = "";
    while ( sInt.length > 3 )
    {
        sAmount = sInt.substring(sInt.length - 3, sInt.length) + sAmount;
        sInt = sInt.substring(0, sInt.length - 3);
    }
    sAmount += sInt;
    return (sAmount);
}

function isLeapYear(Year) // check是否為閏年
{
    if (((Year % 4) == 0) && ((Year % 100) != 0) || ((Year % 400) == 0))
        return true;
    else
        return false;
}


function DATE_F1 (year, month, day)
{
    this.year = year;
    this.month = month;
    this.day = day;
}

function DATE_F2 ( sdate )
{
    this.sdate = sdate;
}

function DATE_F3 (year, month, day, hour)
{
    this.year = year;
    this.month = month;
    this.day = day;
    this.hour = hour;
}

function isValidDate2( sDate, emptyAllow ) // DATE_F2:sDate
{

    sDate.sdate = sDate.sdate.trim();

    if ( sDate.sdate.length < 7 ) {
        if ( sDate.sdate.length == 0 )
            return emptyAllow;
        else
            return false;

    } else if ( sDate.sdate.length > 8 ) {
        return false;

    } else if ( sDate.sdate.length == 7 ) {
        sDate.sdate = '0' + sDate.sdate;
    }

    var date1 = new DATE_F1( sDate.sdate.substring(0, 4), sDate.sdate.substring(4, 6), sDate.sdate.substring(6, 8) );

    if ( isValidDate( date1, emptyAllow ) ) {
        sDate.sdate = date1.year + date1.month + date1.day;
        return true;
    } else {
        return false;
    }
}

function isValidCDate3( theDateTime, emptyAllow ) // DATE_F3:theDateTime
{

    var date1 = new DATE_F1( theDateTime.year, theDateTime.month, theDateTime.day );
    var hh;

    if ( isValidCDate( date1, emptyAllow ) ) {
        theDateTime.year = date1.year;
        theDateTime.month = date1.month;
        theDateTime.day = date1.day;

        if ( isNaN(hh = parseInt(theDateTime.hour, 10)) || ( hh > 23 ) ) {
            return false;
        } else {
            theDateTime.hour = "00" + hh;
            theDateTime.hour = theDateTime.hour.substring( theDateTime.hour.length - 2 );
            return true;
        }
    } else {
        return false;
    }
}

function isValidCDate( theDate, emptyAllow) // DATE_F1, lunar
{
    theDate.year = removeSpace( theDate.year, 4 );
    theDate.year = "" + eval( parseInt(theDate.year, 10) + 1911);

    var result = isValidDate( theDate, emptyAllow );

    var year = "0000" + (parseInt( theDate.year ) - 1911);

    theDate.year = year.substring(year.length - 4);

    return result;
}

function isValidDate( theDate, emptyAllow) // DATE_F1
{
    var leap = 28;
    var monthTable = new Array(12);

    theDate.year = removeSpace( theDate.year, 4 );
    theDate.month = removeSpace( theDate.month, 2 );
    theDate.day = removeSpace( theDate.day, 2 );

    if ( ( theDate.year + theDate.month + theDate.day ).length == 0 )
        return emptyAllow;

    if (isNaN( theDate.year ))
    {
        alert("年度必須為數值 !!");
        return (false);
    }

    if (isNaN( theDate.month ))
    {
        alert("月份必須為數值 !!");
        return (false);
    }

    if (isNaN( theDate.day ))
    {
        alert("日數必須為數值 !!");
        return (false);
    }

    if (( theDate.year.indexOf('.') != - 1) || (theDate.month.indexOf('.') != - 1) || (theDate.day.indexOf('.') != - 1))
    {
        alert("年度,月份,日數必須為數值 !!");
        return (false);
    }

    // 轉換日期型態
    if ( theDate.month.length == 1)
        theDate.month = "0" + theDate.month;
    if ( theDate.day.length == 1)
        theDate.day = "0" + theDate.day;

    nyear = parseInt( theDate.year, 10 );

    opt_str = "0000" + nyear;
    theDate.year = opt_str.substring(opt_str.length - 4);

    // check是否為有效日期

    if ((isLeapYear( nyear )) == true)
        leap = 29;

    monthTable[1] = 31;
    monthTable[2] = leap;
    monthTable[3] = 31;
    monthTable[4] = 30;
    monthTable[5] = 31;
    monthTable[6] = 30;
    monthTable[7] = 31;
    monthTable[8] = 31;
    monthTable[9] = 30;
    monthTable[10] = 31;
    monthTable[11] = 30;
    monthTable[12] = 31;

    xy = parseInt( theDate.year, 10 );
    xm = parseInt( theDate.month, 10 );
    xd = parseInt( theDate.day, 10 );

    if (xm < 1 || xm > 12)
    {
        alert("日數輸入錯誤 !!");
        return (false);
    }
    if (xd > monthTable[xm])
    {
        alert("月份輸入錯誤 !!");
        return (false);
    }
    if (xy < 1600 || xy > (new Date()).getFullYear() )
    {
        alert("年度輸入錯誤 !!");
        return (false);
    }

    return (true);

}

function showDepnt(name) {
    var output = "";
    output += '<select name = "' + name + '" > ';
    output += '<option value = "' + getIrc01IDN() + '">' + getIrc01TAX_PAYER() + '</option>';
    if (trimString(getIrc01SPOUS()) != "") {
        output += '<option value = "' + getIrc01SPOUS_IDN() + '">' + getIrc01SPOUS() + '</option>';
    }

    for ( var i = 0; i < getIrc03Size(); i++ ) {
        output += '<option value = "' + getIrc03IDN(i) + '">' + getIrc03NM(i) + '</option>';
    }

    output += '  </select>';

    return output;

}

function showName( idn ) {
    var name = "";

    if ( "" + idn == "" + getIrc01IDN() ) {
        name = getIrc01TAX_PAYER();
    } else if ( "" + idn == "" + getIrc01SPOUS_IDN() ) {
        name = getIrc01SPOUS();
    } else {
        for ( var i = 0; i < getIrc03Size(); i++ ) {
            if ( "" + idn == "" + getIrc03IDN(i) ) {
                name = getIrc03NM(i);
                break;
            }
        }
    }
    //idn中有*號的
    //alert('idn.(1,10)='+idn.substring(1,10));
    if ( "" + idn.substring(1, 10) == "" + getIrc01IDN().substring(1, 10)) {
        name = getIrc01TAX_PAYER();

    } else if ( "" + idn.substring(1, 10) == "" + getIrc01SPOUS_IDN().substring(1, 10) ) {
        name = getIrc01SPOUS();

    } else {
        for ( var i = 0; i < getIrc03Size(); i++ ) {
            if ( "" + idn.substring(1, 10) == "" + getIrc03IDN(i).substring(1, 10) ) {
                name = getIrc03NM(i);
                break;
            }
        }
    }
    return name;
}

// PIN.htm 轉全形用
function changetext1(obj) {
    var tmp = new Array();
    var a = obj.value;
    var b = "";
    for (var i = 0; i < a.length; i++) {
        if (a.charCodeAt(i) <= 122 && a.charCodeAt(i) >= 48) {
            tmp[i] = a.charCodeAt(i) + 65248; // 轉全形unicode +65248
        } else {
            tmp[i] = a.charCodeAt(i);
        }
        b += String.fromCharCode(tmp[i]);
    }
    obj.value = b;

}
function changetext2() {
    var tmp = new Array();
    var a = document.editForm.ADDR.value;
    var b = "";
    for (var i = 0; i < a.length; i++) {
        if (a.charCodeAt(i) <= 122 && a.charCodeAt(i) >= 48) {
            tmp[i] = a.charCodeAt(i) + 65248; // 轉全形unicode +65248
        } else {
            tmp[i] = a.charCodeAt(i);
        }
        b += String.fromCharCode(tmp[i]);
    }
    document.editForm.ADDR.value = b;

}
function changetext3() {
    var tmp = new Array();
    var a = document.editForm.COMU_LIN.value;
    var b = "";
    for (var i = 0; i < a.length; i++) {
        if (a.charCodeAt(i) <= 122 && a.charCodeAt(i) >= 48) {
            tmp[i] = a.charCodeAt(i) + 65248; // 轉全形unicode +65248
        } else {
            tmp[i] = a.charCodeAt(i);
        }
        b += String.fromCharCode(tmp[i]);
    }
    document.editForm.COMU_LIN.value = b;

}
function changetext4() {
    var tmp = new Array();
    var a = document.editForm.COMU_ADDR.value;
    var b = "";
    for (var i = 0; i < a.length; i++) {
        if (a.charCodeAt(i) <= 122 && a.charCodeAt(i) >= 48) {
            tmp[i] = a.charCodeAt(i) + 65248; // 轉全形unicode +65248
        } else {
            tmp[i] = a.charCodeAt(i);
        }
        b += String.fromCharCode(tmp[i]);
    }
    document.editForm.COMU_ADDR.value = b;

}
// PIN.htm 轉全形用 end
// 轉為全形
function changetext5(str) {
    var tmp = new Array();
    var a = str;
    var b = "";
    for (var i = 0; i < a.length; i++) {
        if (a.charCodeAt(i) <= 122 && a.charCodeAt(i) >= 48) {
            tmp[i] = a.charCodeAt(i) + 65248; // 轉全形unicode +65248
        } else {
            tmp[i] = a.charCodeAt(i);
        }
        b += String.fromCharCode(tmp[i]);
    }
    return b;

}

// 親屬-RPR1.htm, RelativeSupply.htm,RPR2.htm,RPR3.htm
function findDepName(no) {
    var depName;
    no += "";

    if (no == "0")
        depName = "孫(內孫、外孫)";
    else if (no == "1")
        depName = "祖父、祖母、父、母";
    else if (no == "2")
        depName = "兄、弟、姊、妹";
    else if (no == "3")
        depName = "子、女";
    else if (no == "4")
    /*
       * 2010.01.13 by 2472【64】 將[扶養親屬]頁面，稱謂下拉選單之"其他親屬(如伯、姪、孫、甥)"之「孫」字刪除。
       */
    depName = "其他親屬或家屬(如伯、姪、甥、舅等)";
    else if (no == "5")
        depName = "大陸地區之祖父、祖母、父、母";
    else if (no == "6")
        depName = "大陸地區之兄、弟、姊、妹";
    // 102.12.17 修改7選項為大陸地區孫 by 6071
    //else if (no == "7")
    //  depName = "大陸地區之子、女";
    else if (no == "7")
        depName = "大陸地區之孫(內孫、外孫)";
    else if (no == "8")
    //depName = "大陸地區之其他親屬(含孫)";
    depName = "大陸地區之其他親屬或家屬(如伯、姪、甥、舅等)";
    else if (no == "9")
        depName = "大陸地區配偶";
    else if (no == "C")
        depName = "大陸地區之子、女";
    return depName;
}


// 列舉扣除種類
function DED_TPKind(kind) {
    var name;
    kind = trimString(kind);
    kind += "";

    if (kind == "1")
        name = "對政府除土地外之捐贈、國防、勞軍、古蹟等(捐贈現金)";
    else if (kind == "2")
        name = "對機關或團體之捐贈(捐贈現金)";
    else if (kind == "3")
        name = "人身保險費-非健保之保費";
    else if (kind == "4")
        name = "醫藥及生育費";
    else if (kind == "5")
        name = "災害損失";
    else if (kind == "6")
        name = "自用住宅購屋借款利息";
    else if (kind == "7")
        name = "房屋租金支出";
    else if (kind == "8")
        name = "依政治獻金法對擬參選人之捐贈";
    else if (kind == "9")
        name = "依政治獻金法對政黨之捐贈";
    else if (kind == "10")
        name = "依公職人員選罷法規定候選人之競選經費";
    else if (kind == "11")
        name = "依政治獻金法對政治團體之捐贈";
    else if (kind == "12")
        name = "依總統副總統選罷法規定候選人之競選經費";
    else if (kind == "13")
        name = "私立學校法第62條規定之捐贈(指定學校法人或學校)";
    else if (kind == "14")
        name = "以土地對政府之捐贈";
    else if (kind == "15")
        name = "對政府除土地外之捐贈、國防、勞軍、古蹟等(捐贈實物)";
    else if (kind == "16")
        name = "對機關或團體之捐贈(捐贈實物)";
    else if (kind == "17")
        name = "人身保險費-健保費";
    else if (kind == "18")
        name = "私立學校法第62條規定之捐贈(未指定學校法人或學校)";

    return name;
}

// =======加上千分號=========================================================
function changeThousStr(T1) {
    c = "";
    var oring = "" + T1;
    var t1v1 = "" + T1;
    var t1v2 = "";
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    if (isNaN(Math.abs(T1)))
    {
        alert("請輸入數字");
        return oring;
    } else {
        if (eval(T1) < 0 ) {
            c = "-";
        }
    }

    if (T1.length == 0)
        return oring;
    if (Math.abs(T1) == 0)
        return oring;

    T1 = Math.abs(T1);
    t1v1 = "" + T1;

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    pos = oring.indexOf(",", 0);
    if (pos==-1)
    {
        var len = t1v1.length;
        a = Math.floor(len % 3);
        b = Math.floor(len / 3 - 1);
        if (a != 0 && b >= 0) {
            oring = t1v1.substring(0, a) + ",";
        } else if (b < 0) {
            oring = t1v1;
        } else {
            oring = "";
        }
        for (i = 0; i < b; i++)
        {
            oring += t1v1.substring(a, a + 3) + ",";
            a += 3;
        }
        // end of for

        oring += t1v1.substring(a, len);

        if (c == "-" )
        {
            oring = "-" + oring;
        }
        if (t1v2 != "")
            oring += t1v2;

        return oring;
    }
}

function checkChineseLength(TextObj, ObjName, minLength) {
    var strCheckString;
    strCheckString = TextObj.value;

    intC = 0;
    intC2 = 0;

    for (intC2 = 0; intC2 < strCheckString.length; intC2++)
    {
        if (strCheckString.charCodeAt(intC2) > 127)
        {
            // 因為超過 ASCII 的範圍，所以表示可能有中文。
            intC = intC + 2;
        } else
        {
            intC = intC + 1;
        }
    }

    if (intC < minLength) {
        alert('<' + ObjName + '>輸入的字數過少');
        TextObj.focus();
        return false;
    }

    return true;
}

function checkChinese(name) {
    // 檢查是否為中文字
    var result = true;

    intC = 0;
    intC2 = 0;

    for (intC2 = 0; intC2 < name.length; intC2++) {
        if (!(name.charCodeAt(intC2) > 127)) {
            // 因為超過 ASCII 的範圍，所以表示可能有中文。
            result = false;
            break;
        }
    }
    return result;
}

// =====判斷是否為英文字===========================================================
function checkEng(data) //
{
    if (data < 'A' || data > 'Z') {
        return false;
    } else {
        return true;
    }
}
// ==所得頁若為5 512
// LosnNO長度補滿(結果回傳)======================================================================
function addZeroLosnNO( LosnNO) {
    LosnNO = "" + LosnNO;

    if (LosnNO.length == 3) {
        LosnNO = LosnNO;
    } else if (LosnNO.length == 2) {
        LosnNO = "0" + LosnNO;
    } else if (LosnNO.length == 1) {
        LosnNO = "00" + LosnNO;
    }
    return LosnNO;
}

// =======刪除千分號=================================================================
function changeVal(T1)
{
    pos = 0;
    var oring = T1.value ;
    pos = oring.indexOf(",");
    while ( pos != - 1 )
    {
        oring = (oring).replace(",", "");
        pos = oring.indexOf(",");
    }
    return oring;
}
// =======刪除千分號2=================================================================
function changeVal2(T1)
{
    pos = 0;
    var oring = T1 ;
    pos = oring.indexOf(",");
    while ( pos != - 1 )
    {
        oring = (oring).replace(",", "");
        pos = oring.indexOf(",");
    }
    return oring;
}
// =======加上千分號=========================================================
function changeStr9(T1)
{
    c = "";
    var oring = changeVal(T1);
    var t1v1 = changeVal(T1);
    var t1v2 = "";
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    if (isNaN(Math.abs(oring)))
    {
        alert("請輸入數字");
        return false;
    } else {
        if (eval(oring) < 0 )
            c = "-";
    }
    oring = Math.abs(oring);
    t1v1 = oring;

    if ((T1.value).indexOf(".") != - 1 )
    {
        alert("不可輸入小數點");
        return false;
    }
    return true;
}


// =======加上千分號 IRCWeb=========================================================
function StrThousand(T1)
{
    c = "";
    var oring = "" + T1;
    var t1v1 = "" + T1;
    var t1v2 = "";
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    if (T1.length == 0)
        return oring;
    if (Math.abs(T1) == 0)
        return oring;
    if (eval(T1) < 0 )
        c = "-";
    T1 = Math.abs(T1);
    t1v1 = T1;
    pos = oring.indexOf(",");
    if (pos==-1) {
        t1v1 = "" + t1v1;
        var len = t1v1.length;
        a = Math.floor(len % 3);
        b = Math.floor(len / 3 - 1);
        if (a != 0 && b >= 0) {
            oring = t1v1.substring(0, a) + ",";
        } else if (b < 0) {
            oring = t1v1;
        } else {
            oring = "";
        }

        for (i = 0; i < b; i++)
        {
            oring += t1v1.substring(a, a + 3) + ",";
            a += 3;
        }
        // end of for
        oring += t1v1.substring(a, len);

        if (c == "-" )
        {
            oring = "-" + oring;
        }
        if (t1v2 != "")
            oring += t1v2;

        return oring;
    }
}

// =======加上千分號=========================================================

function changeStr1(T1, tmCOUNT, tmCOUNT1, tmDescript)
{
    c = "";
    var oring = T1.value;
    var t1v1 = T1.value;
    var t1v2 = "";
    var t1v3 = "1";
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    if (isNaN(Math.abs(T1.value)))
    {
        alert("請輸入數字");
        return oring;
    } else {
        if (eval(T1.value) < 0 )
            c = "-";
    }

    if (T1.value.length == 0)
        return oring;
    if (Math.abs(T1.value) == 0)
        return oring;

    // ===============================================
    for (Count = 1; Count <= Math.abs(tmCOUNT1); Count++) {
        t1v3 = t1v3 + "0";

    }
    if (eval(oring) > Math.abs(t1v3))
    {
        alert(tmDescript + "不可大於 " + t1v3);
        return oring;
    }
    // ===============================================
    T1.value = Math.abs(T1.value);
    t1v1 = T1.value;

    if ((pos = t1v1.indexOf(".")) != - 1)
    {
        len = (T1.value).substring((T1.value).indexOf(".") + 1, T1.value.length);
        if (len.length > Math.abs(tmCOUNT))
        {
            alert("小數點後只能有 " + tmCOUNT + " 個位數");
            return oring;
        }
        T1.value = eval(T1.value);
    }
    if ((pos = t1v1.indexOf(".")) != - 1)
    {
        t1v2 = t1v1.substring(pos, ((T1.value).length));
        t1v1 = t1v1.substring(0, pos);
    }
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    pos = oring.indexOf(",");
    if (pos==-1)
    {
        var len = t1v1.length;
        a = Math.floor(len % 3);
        b = Math.floor(len / 3 - 1);
        if (a != 0 && b >= 0)
            oring = t1v1.substring(0, a) + ",";
        else if (b < 0)
            oring = t1v1;
        else
            oring = "";
        for (i = 0; i < b; i++)
        {
            oring += t1v1.substring(a, a + 3) + ",";
            a += 3;
        }
        // end of for

        oring += t1v1.substring(a, len);

        if (c == "-" )
        {
            oring = "-" + oring;
        }
        if (t1v2 != "")
            oring += t1v2;

        return oring;
    }
}
// =======加上千分號=========================================================
function changeStr8(T1, tmCOUNT, tmCOUNT1, tmDescript)
{
    c = "";
    var oring = changeVal(T1);
    var t1v1 = changeVal(T1);
    var t1v2 = "";
    var t1v3 = "1";
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    if (isNaN(Math.abs(oring)))
    {
        alert("請輸入數字");
        return false;
    } else {
        if (eval(oring) < 0 )
            c = "-";
    }
    // ===============================================
    for (Count = 1; Count <= Math.abs(tmCOUNT1); Count++) {
        t1v3 = t1v3 + "0";
    }
    if (eval(oring) > Math.abs(t1v3))
    {
        alert(tmDescript + "不可大於 " + t1v3);
        return false;
    }
    // ===============================================
    oring = Math.abs(oring);
    t1v1 = oring;

    if ((T1.value).indexOf(".") != - 1 )
    {
        len = (T1.value).substring((T1.value).indexOf(".") + 1, T1.value.length);
        if (len.length > Math.abs(tmCOUNT))
        {
            alert("小數點後只能有 " + tmCOUNT + " 個位數");
            return false;
        }
    }
    return true;
}
function BasTaxMemo(cn, fmt, memo) {
    cn = trimString(cn);
    fmt = trimString(fmt);
    memo = trimString(memo);
    var res = "";
    if ((cn == "7") && ((fmt == "76S") || (fmt == "76V") || (fmt == "76U"))) {
        if (memo == "1") {
            res = "個別認定法";
        } else if (memo == "2") {
            res = "加權平均法";
        }
    } else {
        res = memo ;
    }
    return res;
}
// ==判段所得總額是否為減項
// 秀出負號======================================================================
function TypeINCM_AMT(incm_cn , incm_fmt) {
    var res = "";
    if ((trimString(incm_cn) == "1" && trimString(incm_fmt) == "54E") || (trimString(incm_cn) == "1" && trimString(incm_fmt) == "54J")) {
        res = "-";
    }
    return res;
}
// ==判段扣繳稅額額是否為減項
// 秀出負號======================================================================
function TypeWH_TAX(incm_cn , incm_fmt) {
    var res = "";
    if (trimString(incm_cn) == "1" && trimString(incm_fmt) == "54E" ) {
        res = "-";
    }
    return res;
}

// ==判斷採何種稅制======================================================================
function getDeductKind() {
    var DeuctCount = 0;
    /*
     * 2010.01.14 三、標準扣除額 (1)單身 73,000->76,000 (2)夫妻 146,000->152,000
     */
    if (trimString(getIrc01SPOUS_IDN()) != "") {
        // 2014.01.15 by 6071
        DeuctCount = getV_STD_HAS_SPOUS(); //152000 ; // 2008.01.07 2472 92000;
    } else {
        // 2014.01.15 by 6071
        DeuctCount = getV_STD_DED(); // 76000; // 2008.01.07 24724 6000;
    }

    //if(eval(getIrc01COMMON())> eval(DeuctCount) ){ // adj by 6071
    if (eval(getIrc15GENE_DED()) > eval(DeuctCount) ) {
        return "1"; // "(採列舉扣除)";
    } else {
        return "0"; // "(採標準扣除)";
    }
}



