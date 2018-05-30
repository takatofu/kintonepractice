//アプリIDを取得
var appID = kintone.app.getId();

// ログインユーザ情報
var user = kintone.getLoginUser();

//クエリ文の設定
var qryInfo = 'ユーザー選択 in (LOGINUSER())';  

//リクエストを行う
kintone.api('/k/v1/records', 'GET', { app: appID, query: qryInfo}, function(resp) {
    if (resp['records'].length > 0) {
        var msg = "";
        for (var i = 0; i < resp['records'].length; i++) {
            msg += "・ " + resp['records'][i]['文字列__1行_']['value'] + "\n";
        }
        alert(user.name + "が担当している会社\n\n" + msg);
    }
});