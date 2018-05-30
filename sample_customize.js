
<meta http-equiv="content-type" content="text/html;charset=utf-8">
(function() {
    'use strict';

    kintone.events.on('app.record.index.show', function(event) {
        if (!event.size) {
            return;
        }

        var records = event.records;
        var signalColorParts = kintone.app.getFieldElements('信号の色');
        for (var i = 0; i < records.length; i++) {
            // 値の取得
            var color = records[i].信号の色.value;

            // DOM要素の取得
            var part = signalColorParts[i];

            // 値ごとに表示分け
            if (color === '赤') {
                part.style.fontWeight = 'bold';
                part.style.color = '#ffffff';
                part.style.backgroundColor = '#ff0000';

            } else if (color === '青') {
                part.style.fontWeight = 'bold';
                part.style.color = '#ffffff';
                part.style.backgroundColor = '#0000ff';

            } else if (color === '黄色') {
                part.style.fontWeight = 'bold';
                part.style.color = '#ffffff';
                part.style.backgroundColor = '#ffd700';
            }
        }
    });
})();
