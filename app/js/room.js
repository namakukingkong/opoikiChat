  var n;

  console.log("bebel");
  //rooms data:
  /* */
var bb;
//bb="results":{"rooms":[{"id":172,"name":"Qiscus & 1618 Engineering","code":"oykf","code_en":"qq3ed2b762326abb78d9e6e36183b47209d1qe2","last_message":"kayaknya pernah ada yang ngomong ke mas @evan, di social media itu writen in bit :v ","count_unread":101,"topics":[[447,"sharing","sharing folder:<br><br>//DONDELTA/learn<br>",false,28],[711,"Quote of the week","desc : ",false,0],[1093,"Announcement","desc : ",false,0],[1426,"Kaos","desc : ",false,0],[1427,"Makan katering","desc : ",false,0],[1689,"Tech blog","desc : ",false,0],[1805,"Progress update","desc : ",false,0],[1981,"Futsal","desc : ",false,0],[2187,"17 march sprint","desc : ",false,0],[2221,"Oot","desc : ",false,8],[2711,"Qiscus hackathon","desc : ",false,0],[3178,"Techtalk","desc : ",false,0],[3268,"Pair programming","desc : ",false,0],[3388,"Bq","desc : ",false,62],[3455,"Coding article","desc : ",false,0],[3594,"Open together","desc : ",false,0],[3724,"Engineering show","desc : ",false,0],[4174,"Qischrome","desc : ",false,3],[4253,"Android","desc : ",false,0]],"last_comment_id":131492,"last_topic_id":3388,"last_topic_title":"Bq","listtopics":[{"id":447,"title":"sharing","desc":"","deleted":false,"count_notif":28},{"id":711,"title":"Quote of the week","desc":"","deleted":false,"count_notif":0},{"id":1093,"title":"Announcement","desc":"","deleted":false,"count_notif":0},{"id":1426,"title":"Kaos","desc":"","deleted":false,"count_notif":0},{"id":1427,"title":"Makan katering","desc":"","deleted":false,"count_notif":0},{"id":1689,"title":"Tech blog","desc":"","deleted":false,"count_notif":0},{"id":1805,"title":"Progress update","desc":"","deleted":false,"count_notif":0},{"id":1981,"title":"Futsal","desc":"","deleted":false,"count_notif":0},{"id":2187,"title":"17 march sprint","desc":"","deleted":false,"count_notif":0},{"id":2221,"title":"Oot","desc":"","deleted":false,"count_notif":8},{"id":2711,"title":"Qiscus hackathon","desc":"","deleted":false,"count_notif":0},{"id":3178,"title":"Techtalk","desc":"","deleted":false,"count_notif":0},{"id":3268,"title":"Pair programming","desc":"","deleted":false,"count_notif":0},{"id":3388,"title":"Bq","desc":"","deleted":false,"count_notif":62},{"id":3455,"title":"Coding article","desc":"","deleted":false,"count_notif":0},{"id":3594,"title":"Open together","desc":"","deleted":false,"count_notif":0},{"id":3724,"title":"Engineering show","desc":"","deleted":false,"count_notif":0},{"id":4174,"title":"Qischrome","desc":"","deleted":false,"count_notif":3},{"id":4253,"title":"Android","desc":"","deleted":false,"count_notif":0}]}]}}
 bb="aaaa";
  function Rooms($scope, $http) {
    $http.get('https://www.qisc.us/api/v1/mobile/rooms?token=As6T68Rys2Sk1z8413xP').
        success(function(data) {
            $scope.loginResult = data;	
            n=bb;
            console.log(n);
        });
}