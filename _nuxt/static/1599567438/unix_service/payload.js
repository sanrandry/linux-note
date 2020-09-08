__NUXT_JSONP__("/unix_service", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af){return {data:[{document:{title:I,description:I,position:3.4,category:"Debian",toc:[{id:E,depth:u,text:aa},{id:ab,depth:u,text:ac},{id:F,depth:u,text:G},{id:H,depth:v,text:J},{id:K,depth:v,text:L},{id:M,depth:v,text:N},{id:O,depth:u,text:P},{id:Q,depth:u,text:R},{id:S,depth:v,text:T},{id:U,depth:v,text:V},{id:X,depth:v,text:Z},{id:_,depth:u,text:$}],body:{type:"root",children:[{type:b,tag:x,props:{id:E},children:[{type:b,tag:r,props:{ariaHidden:n,href:"#system-boot",tabIndex:s},children:[{type:b,tag:d,props:{className:[o,p]},children:[]}]},{type:a,value:aa}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"configuration file location: \u002Fetc\u002Fsystemd\u002Fsystem\u002F\nuse systemctl utilities to manipulate a service status\nstatus of the service"}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,g]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:d,props:{className:[e,m]},children:[{type:a,value:t}]},{type:a,value:" systemctl status servicename\n"}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"start the service"}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,g]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:d,props:{className:[e,m]},children:[{type:a,value:t}]},{type:a,value:" systemctl start servicename\n"}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"stop the service"}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,g]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:d,props:{className:[e,m]},children:[{type:a,value:t}]},{type:a,value:" systemctl stop servicename\n"}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"restart the service"}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,g]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:d,props:{className:[e,m]},children:[{type:a,value:t}]},{type:a,value:" systemctl restart servicename\n"}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"start automatically the service on boot"}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,g]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:d,props:{className:[e,m]},children:[{type:a,value:t}]},{type:a,value:" systemctl enamble"},{type:b,tag:d,props:{className:[e,D]},children:[{type:a,value:W}]},{type:a,value:"disable"},{type:b,tag:d,props:{className:[e,D]},children:[{type:a,value:W}]},{type:a,value:"is-enabled servicename\n"}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"service log"}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,g]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:d,props:{className:[e,m]},children:[{type:a,value:t}]},{type:a,value:" journalctl -u servicename\n"}]}]}]},{type:a,value:c},{type:b,tag:x,props:{id:ab},children:[{type:b,tag:r,props:{ariaHidden:n,href:"#remote-login",tabIndex:s},children:[{type:b,tag:d,props:{className:[o,p]},children:[]}]},{type:a,value:ac}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"install openssh-client and openssh-server"}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,g]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:d,props:{className:[e,m]},children:[{type:a,value:t}]},{type:a,value:w},{type:b,tag:d,props:{className:[e,m]},children:[{type:a,value:"apt-get"}]},{type:a,value:w},{type:b,tag:d,props:{className:[e,m]},children:[{type:a,value:"install"}]},{type:a,value:w},{type:b,tag:d,props:{className:[e,m]},children:[{type:a,value:Y}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"connection with password"}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,g]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:d,props:{className:[e,m]},children:[{type:a,value:Y}]},{type:a,value:" user@server_ip \n"}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Key-based authentication"}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,g]},children:[{type:b,tag:l,props:{},children:[{type:a,value:"ssh-copy-id user@server_ip \n"}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"the key will be stored in ~\u002F.ssh\u002Fauthorize_keys file\nif you want to remove, just remove it inside the authorize_keys file"}]},{type:a,value:c},{type:b,tag:x,props:{id:F},children:[{type:b,tag:r,props:{ariaHidden:n,href:"#managing-right",tabIndex:s},children:[{type:b,tag:d,props:{className:[o,p]},children:[]}]},{type:a,value:G}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:C,props:{},children:[{type:a,value:"owner (symbolise by u as user)"}]},{type:a,value:c},{type:b,tag:C,props:{},children:[{type:a,value:"owner goup (symbolise by g as group)"}]},{type:a,value:c},{type:b,tag:C,props:{},children:[{type:a,value:"other (symbolise by o as other)"}]},{type:a,value:c},{type:b,tag:C,props:{},children:[{type:a,value:"all (symolise by a as all)\nr= read, w= write, x= execute"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:y,props:{id:H},children:[{type:b,tag:r,props:{ariaHidden:n,href:"#commands-control",tabIndex:s},children:[{type:b,tag:d,props:{className:[o,p]},children:[]}]},{type:a,value:J}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"chown: change the owner of the file\nchgrp: alter the owner group\nchmod: change the permissions for th file\nexplict change: ="}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,g]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:d,props:{className:[e,m]},children:[{type:a,value:B}]},{type:a,value:w},{type:b,tag:d,props:{className:[e,"assign-left","variable"]},children:[{type:a,value:"u"}]},{type:b,tag:d,props:{className:[e,D]},children:[{type:a,value:"="}]},{type:a,value:"rwx test.txt\n"}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"substracting: -"}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,g]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:d,props:{className:[e,m]},children:[{type:a,value:B}]},{type:a,value:" o-x test.txt\n"}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"adding: +"}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,g]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:d,props:{className:[e,m]},children:[{type:a,value:B}]},{type:a,value:" u+r test.txt\n"}]}]}]},{type:a,value:c},{type:b,tag:y,props:{id:K},children:[{type:b,tag:r,props:{ariaHidden:n,href:"#the-octal-numeric-representation",tabIndex:s},children:[{type:b,tag:d,props:{className:[o,p]},children:[]}]},{type:a,value:L}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"4: read, 2: write, 1: execute\n4+2+1= 7: read write execute\n4+1= 5: read execute\n4+2= 6: read write\n0: no right"}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,g]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:d,props:{className:[e,m]},children:[{type:a,value:B}]},{type:a,value:w},{type:b,tag:d,props:{className:[e,A]},children:[{type:a,value:"751"}]},{type:a,value:" test.txt\n"}]}]}]},{type:a,value:c},{type:b,tag:y,props:{id:M},children:[{type:b,tag:r,props:{ariaHidden:n,href:"#recursive-mode",tabIndex:s},children:[{type:b,tag:d,props:{className:[o,p]},children:[]}]},{type:a,value:N}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,g]},children:[{type:b,tag:l,props:{},children:[{type:a,value:"chomd -R a+x test.txt\n"}]}]}]},{type:a,value:c},{type:b,tag:x,props:{id:O},children:[{type:b,tag:r,props:{ariaHidden:n,href:"#syslog-system-events",tabIndex:s},children:[{type:b,tag:d,props:{className:[o,p]},children:[]}]},{type:a,value:P}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"linux log directory: \u002Fvar\u002Flog"},{type:b,tag:q,props:{},children:[]},{type:a,value:"\nlinux log configuration files: \u002Fetc\u002Frsyslog.conf"},{type:b,tag:q,props:{},children:[]},{type:a,value:"\nyou can store the log in another machine "}]},{type:a,value:c},{type:b,tag:x,props:{id:Q},children:[{type:b,tag:r,props:{ariaHidden:n,href:"#scheduling-task-with-cron-and-atd",tabIndex:s},children:[{type:b,tag:d,props:{className:[o,p]},children:[]}]},{type:a,value:R}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"cron: responsible for executing scheduled and recurring commands(every day, every week, etc...)."},{type:b,tag:q,props:{},children:[]},{type:a,value:"\natd: deals with commands to be executed a single time, but at a specific moment in the future."},{type:b,tag:q,props:{},children:[]},{type:a,value:"\nEach user has thus their own crontab. "},{type:b,tag:q,props:{},children:[]},{type:a,value:"\nit can edited by running:"}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,g]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:d,props:{className:[e,m]},children:[{type:a,value:"crontab"}]},{type:a,value:" -e\n"}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"its content is stored in the \u002Fvar\u002Fspool\u002Fcron\u002Fcrontabs\u002Fuser file"},{type:b,tag:q,props:{},children:[]},{type:a,value:"\nto allow and deny a user to access to cron create and\nedit \u002Fetc\u002Fcron.allow or \u002Fetc\u002Fcron.deny, by default all user is allowed to access cron."},{type:b,tag:q,props:{},children:[]},{type:a,value:"\nthe root user has their own crontab, but can also use the \u002Fetc\u002Fcrontab file,  or write addtional crontab files in the \u002Fetc\u002Fcron.d directory. these last two solutions have the advantage of being able to specify the user identity to use when executing the command"}]},{type:a,value:c},{type:b,tag:y,props:{id:S},children:[{type:b,tag:r,props:{ariaHidden:n,href:"#format-of-a-crontab-file",tabIndex:s},children:[{type:b,tag:d,props:{className:[o,p]},children:[]}]},{type:a,value:T}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"text shortcuts for cron: "},{type:b,tag:q,props:{},children:[]},{type:a,value:"\n@yearly: once per year(january 1, at 00:00)"},{type:b,tag:q,props:{},children:[]},{type:a,value:"\n@monthly: once per month(the 1st of the month, at 00:00)"},{type:b,tag:q,props:{},children:[]},{type:a,value:"\n@weekly: once per week (Sunday at 00:00)"},{type:b,tag:q,props:{},children:[]},{type:a,value:"\n@dayly: once per day (at 00:00)"},{type:b,tag:q,props:{},children:[]},{type:a,value:"\n@hourly: once per hour (at the beginning of each hour)"}]},{type:a,value:c},{type:b,tag:y,props:{id:U},children:[{type:b,tag:r,props:{ariaHidden:n,href:"#sample-crontab-file",tabIndex:s},children:[{type:b,tag:d,props:{className:[o,p]},children:[]}]},{type:a,value:V}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,g]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:d,props:{className:[e,z]},children:[{type:a,value:"#Format"}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,z]},children:[{type:a,value:"#min hour day dow command"}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,z]},children:[{type:a,value:"#Download data every night at 7:25 pm"}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,A]},children:[{type:a,value:"25"}]},{type:a,value:"  "},{type:b,tag:d,props:{className:[e,A]},children:[{type:a,value:"19"}]},{type:a,value:"  *   *   "},{type:b,tag:d,props:{className:[e,ad,ae]},children:[{type:a,value:af}]},{type:a,value:"\u002Fbin\u002Fget.pl\n"},{type:b,tag:d,props:{className:[e,z]},children:[{type:a,value:"# 8:00 am, on weekdays (Monday through Friday)"}]},{type:a,value:"\n00  08  *   *   "},{type:b,tag:d,props:{className:[e,A]},children:[{type:a,value:"1"}]},{type:a,value:"-5 "},{type:b,tag:d,props:{className:[e,ad,ae]},children:[{type:a,value:af}]},{type:a,value:"\u002Fbin\u002Fdosomething\n"},{type:b,tag:d,props:{className:[e,z]},children:[{type:a,value:"# Restart the IRC proxy after each reboot"}]},{type:a,value:"\n@reboot \u002Fusr\u002Fbin\u002Fdircproxy\n"}]}]}]},{type:a,value:c},{type:b,tag:y,props:{id:X},children:[{type:b,tag:r,props:{ariaHidden:n,href:"#using-the-at-command",tabIndex:s},children:[{type:b,tag:d,props:{className:[o,p]},children:[]}]},{type:a,value:Z}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,g]},children:[{type:b,tag:l,props:{},children:[{type:a,value:"at 09:00 "},{type:b,tag:d,props:{className:[e,A]},children:[{type:a,value:"27.07"}]},{type:a,value:".20 "},{type:b,tag:d,props:{className:[e,"builtin","class-name"]},children:[{type:a,value:"echo"}]},{type:a,value:w},{type:b,tag:d,props:{className:[e,"string"]},children:[{type:a,value:"\"Don't forget to wish a happy birthday to san randry\""}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"to cancel a task scheduled by cron, simpy run crontab -e and delete the corresponding line in the crontab file.\nfor at, run atrm task-number."}]},{type:a,value:c},{type:b,tag:x,props:{id:_},children:[{type:b,tag:r,props:{ariaHidden:n,href:"#quotas",tabIndex:s},children:[{type:b,tag:d,props:{className:[o,p]},children:[]}]},{type:a,value:$}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"chage the limits"}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,g]},children:[{type:b,tag:l,props:{},children:[{type:a,value:"edquota user or edquota -g group\n"}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"there was two type of limits called \"soft\" and \"hard\""}]}]},dir:"\u002Fen",path:"\u002Fen\u002Funix_service",extension:".md",slug:"unix_service",createdAt:"1970-01-01T00:00:00.000Z",updatedAt:"2020-09-08T12:02:12.918Z",to:"\u002Funix_service"},prev:{title:"Basic configuration",slug:"basic_configuration",to:"\u002Fbasic_configuration"},next:null}],fetch:[],mutations:[]}}("text","element","\n","span","token","p","line-numbers","div","nuxt-content-highlight","pre","language-bash","code","function","true","icon","icon-link","br","a",-1,"sudo",2,3," ","h2","h3","comment","number","chmod","li","operator","system-boot","managing-right","managing right","commands-control","Unix service","commands control","the-octal-numeric-representation","the octal numeric representation","recursive-mode","recursive mode","syslog-system-events","syslog system events","scheduling-task-with-cron-and-atd","Scheduling task with cron and atd","format-of-a-crontab-file","format of a crontab file","sample-crontab-file","sample crontab file","|","using-the-at-command","ssh","Using the at command","quotas","Quotas","system boot","remote-login","remote login","environment","constant","$HOME")));