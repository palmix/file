

var expDays = 7; 




function GetCookie (name) {
var arg = name + "=";
var alen = arg.length;
var clen = document.cookie.length;
var i = 0;
while (i < clen) {
var j = i + alen;
if (document.cookie.substring(i, j) == arg)
return getCookieVal (j);
i = document.cookie.indexOf(" ", i) + 1;
if (i == 0) break;
}
return null;
}
function SetCookie (name, value) {
var argv = SetCookie.arguments;
var argc = SetCookie.arguments.length;
var expires = (argc > 2) ? argv[2] : null;
var path = (argc > 3) ? argv[3] : null;
var domain = (argc > 4) ? argv[4] : null;
var secure = (argc > 5) ? argv[5] : false;
document.cookie = name + "=" + escape (value) +
((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
((path == null) ? "" : ("; path=" + path)) +
((domain == null) ? "" : ("; domain=" + domain)) +
((secure == true) ? "; secure" : "");
}
function DeleteCookie (name) {
var exp = new Date();
exp.setTime (exp.getTime() - 1);
var cval = GetCookie (name);
document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString();
}
var exp = new Date();
exp.setTime(exp.getTime() + (expDays*24*60*60*1000));
function amt(){
var count = GetCookie('count')
if(count == null) {
SetCookie('count','1')
return 1
}
else {
var newcount = parseInt(count) + 1;
DeleteCookie('count')
SetCookie('count',newcount,exp)
return count
   }
}
function getCookieVal(offset) {
var endstr = document.cookie.indexOf (";", offset);
if (endstr == -1)
endstr = document.cookie.length;
return unescape(document.cookie.substring(offset, endstr));
}

function checkCount() {
var count = GetCookie('count');
if (count == null) {
count=1;
SetCookie('count', count, exp);



$(function(){
  var introguide = introJs();

  
  introguide.setOptions({
    steps: [
    {
      element: '#Header1',
      intro: '����� �� ����� ������<br/>��� ��� ������ ������ ������� ������.<br/>������ ������ ������ ������ �� ���� ��� ESC ������.<br/>',
      position: 'bottom'
    },
    {
      element: '.menuku',
      intro: '��� ������� ��� ��� ������� ������ ���� ����� ������.',
      position: 'bottom'
    },
    {
      element: '#cse-search-box-form-id',
      intro: '������ ���� ����� ����� �� ����� ����.',
      position: 'bottom'
    },
    {
      element: '#HTML17',
      intro: '���� ����� ������ ������� �� ����.',
      position: 'right'
    },
    {
      element: '#HTML13',
      intro: "��� ��� ���� �� ���� ���� �����ڡ ����� ����� ������ ���������� ����� �ߡ ������ �� ����� ���������� ������� ������ �� ���� ������ ������� ����� ������ ����� �������.",
      position: 'bottom'
    },
    {
      element: '.click_to_Watch',
      intro: "��� ����� ��� ������ ������� ����� ���� ��� ������ ��� ������� �����ɡ ������ ������ ����� ����� ����� �����.",
      position: 'bottom'
    },
    {
      element: '#PageList2',
      intro: "������ ����� ������� ���� ���.",
      position: 'bottom'
    },
    {
      element: '#ContactForm1',
  intro: "������� ��� ���� ��ǡ ��� ������ �������.",
      position: 'bottom'
    }
    ]
  });

  introguide.start();


});



}
else {
count++;
SetCookie('count', count, exp);
   }
}

