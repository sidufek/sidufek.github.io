require=function n(t,o,e){function i(u,s){if(!o[u]){if(!t[u]){var a="function"==typeof require&&require;if(!s&&a)return a(u,!0);if(r)return r(u,!0);var c=new Error("Cannot find module '"+u+"'");throw c.code="MODULE_NOT_FOUND",c}var l=o[u]={exports:{}};t[u][0].call(l.exports,function(n){var o=t[u][1][n];return i(o?o:n)},l,l.exports,n,t,o,e)}return o[u].exports}for(var r="function"==typeof require&&require,u=0;u<e.length;u++)i(e[u]);return i}({CounterScript:[function(n,t,o){"use strict";cc._RF.push(t,"7fbc9LgwexLAJoq0VMX4a0f","CounterScript"),cc.Class({"extends":cc.Component,onLoad:function(){this.counter=0},add:function(){this.counter+=1,this.node.getComponent(cc.Label).string=this.counter+""},reset:function(){this.counter=0,this.node.getComponent(cc.Label).string=this.counter+""}}),cc._RF.pop()},{}],GameLabelScript:[function(n,t,o){"use strict";cc._RF.push(t,"a04bew7RqVL/rgXv0wG2gdm","GameLabelScript"),cc.Class({"extends":cc.Component,properties:{hiddenPosition:{"default":null,type:cc.Point},shownPosition:{"default":null,type:cc.Point}},onLoad:function(){this.node.setPosition(this.hiddenPosition)},show:function(){this.node.setPosition(this.shownPosition)},hide:function(){this.node.setPosition(this.hiddenPosition)}}),cc._RF.pop()},{}],NumberBoxScript:[function(n,t,o){"use strict";cc._RF.push(t,"67d715LqFFDWqFAQUVOVWZx","NumberBoxScript"),cc.Class({"extends":cc.Component,properties:{},onLoad:function(){var n=this;this.node.on("touchend",function(t){cc.log("Token touched:"+n.node.value);var o=n.node.playGround.getEmptyFieldAround(n.node.playGroundPosition);null!=o&&(n.node.playGround.moveTo(o,n.node),n.node.playGround.isInValidState(),1==n.node.playGround.isInValidState()?n.node.playGround.gameLabel.show():n.node.playGround.gameLabel.hide(),n.node.playGround.Counter.add())})}}),cc._RF.pop()},{}],PlayGroundScript:[function(n,t,o){"use strict";cc._RF.push(t,"5a26fsJmq5DZY0qyCYi2qYy","PlayGroundScript");var e=n("GameLabelScript"),i=n("CounterScript");cc.Class({"extends":cc.Component,properties:{TokenPrefab:{"default":null,type:cc.Prefab},gameLabel:{"default":null,type:e},Counter:{"default":null,type:i}},onLoad:function(){this.playGround=[[],[],[],[]],this.initialize(),cc.log("Is in valid state: "+this.isInValidState())},initialize:function(){this.tokens&&this.removeTokens(),this.tokens=this.createTokens(),this.shuffleArray(this.tokens);for(var n=0,t=0;t<4;t++)for(var o=0;o<4;o++){var e=this.tokens[n++];this.put(o,t,e)}},removeTokens:function(){for(var n=0;n<this.tokens.length;n++)null!=this.tokens[n]&&this.tokens[n].removeFromParent(!0);this.tokens=null},put:function(n,t,o){this.playGround[n][t]=o,null!=o&&(this.node.addChild(o),o.setPosition(180*n-270,270-180*t),o.playGroundPosition=cc.p(n,t))},moveTo:function(n,t){this.playGround[n.x][n.y]=t,t.setPosition(180*n.x-270,270-180*n.y),this.playGround[t.playGroundPosition.x][t.playGroundPosition.y]=null,t.playGroundPosition=n},createTokens:function(){for(var n=[],t=0;t<15;t++)n.push(this.getToken(t));return n.push(null),n},shuffleArray:function(n){var t,o,e;for(e=n.length;e;e--)t=Math.floor(Math.random()*e),o=n[e-1],n[e-1]=n[t],n[t]=o},getToken:function(n){var t=cc.instantiate(this.TokenPrefab);return t.value=n,t.playGround=this,t.getChildByName("label").getComponent("cc.Label").string=parseInt(n),t},getEmptyFieldAround:function(n){var t=cc.p(n.x+1,n.y),o=cc.p(n.x-1,n.y),e=cc.p(n.x,n.y-1),i=cc.p(n.x,n.y+1);return 0==this.isPositionOnPlayGround(t)&&(t=null),0==this.isPositionOnPlayGround(o)&&(o=null),0==this.isPositionOnPlayGround(e)&&(e=null),0==this.isPositionOnPlayGround(i)&&(i=null),t&&null==this.playGround[t.x][t.y]?t:o&&null==this.playGround[o.x][o.y]?o:e&&null==this.playGround[e.x][e.y]?e:i&&null==this.playGround[i.x][i.y]?i:null},isPositionOnPlayGround:function(n){return n.x>=0&&n.x<=3&&n.y>=0&&n.y<=3},isInValidState:function(){for(var n=0;n<4;n++)for(var t=0;t<4;t++)if(null!=this.playGround[t][n]&&0==this.isTokenAtRightPosition(this.playGround[t][n],t,n))return!1;return!0},isTokenAtRightPosition:function(n,t,o){var e=4;return Math.floor(n.value/e)==o&&n.value%e==t}}),cc._RF.pop()},{CounterScript:"CounterScript",GameLabelScript:"GameLabelScript"}],ResetButtonScript:[function(n,t,o){"use strict";cc._RF.push(t,"63a4abstUZPJKnPF7a3mWKR","ResetButtonScript");var e=n("PlayGroundScript");cc.Class({"extends":cc.Component,properties:{playGround:{"default":null,type:e}},onLoad:function(){var n=this;n.node.on("touchend",function(t){n.playGround.initialize(),n.playGround.gameLabel.hide(),n.playGround.Counter.reset()})}}),cc._RF.pop()},{PlayGroundScript:"PlayGroundScript"}]},{},["CounterScript","GameLabelScript","NumberBoxScript","PlayGroundScript","ResetButtonScript"]);