/**
 * http://usejsdoc.org/
 */

var no = 1;
var updateTimer;

// 画面表示時の処理を行う。
$(document).ready(function() {
  // 更新タイマ開始する。
  startUpdateTimer();
});

/**
 * 更新開始ボタン押下時の処理を行う。
 */
$('#startUpdateTimerButton').click(function() {
  alert("a");
  // 更新タイマを開始する。
  startUpdateTimer();
});

/**
 * 更新停止ボタン押下時の処理を行う。
 */
$('#stopUpdateTimerButton').click(function() {
  alert("1");
  // 更新大麻を停止する。
  stopUpdateTimer();
});

/**
 * 更新タイマを開始する。
 */
function startUpdateTimer() {
  updateTimer = setInterval(function() {
    updateData();
  }, 1000);
}

/**
 * 更新タイマを停止する。
 */
function stopUpdateTimer() {
  alert("2");
  clearInterval(updateTimer);
}

/**
 * データを更新する。
 */
function updateData() {
  $.ajax({
    url: '/update',
    type: 'post',
  }).done(function(data) {
    updateSuccess(data);
  }).fail(function(data) {
    updateError(data);
  });
}

/**
 * データ更新の正常時の処理を行う。
 *
 * @param {data} 受信したデータ
 */
function updateSuccess(data) {
  // 行を追加する。
  insertRow(data);
}

/**
 * データ更新の異常時の処理を行う。
 */
function updateError(data) {
}

/**
 * 行を追加する。
 *
 * @param {data} センサデータ
 */
function insertRow(data) {
  var table = document.getElementById('table');
  $('#table').append('<tr><td>'+ no + '</td><td>' + data.time + '</td><td>' + data.data1 + '</td><td>' + data.data2 + '</td><td>' + data.data3 + '</td></tr>');
  no += 1;
}
