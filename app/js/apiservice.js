 qischatMod.service(
            "request",
            function( $http, $q ) {
 
                // Return public API.
                return({
                    login: login,
                    rooms: rooms,
                    roomCreate:roomCreate,
                    roomDelete:roomDelete,
                    roomInvite:roomInvite,
                    topics:topics,
                    topicCreate:topicCreate,
                    topicDelete:topicDelete,
                    commentLoad:commentLoad,
                    commentLoadMore:commentLoadMore,
                    commentPost:commentPost,
                    commentDelete:commentDelete,
                    readNotif:readNotif
                });
 
 
                // ---
                // PUBLIC METHODS.
                // ---
 
 
                // I add a friend with the given name to the remote collection.
                function login( u,p ) {
                    console.log("username"+u);
                    console.log("password"+p);
                    var request = $http({
                        method: "post",
                        url: "http://www.qisc.us/users/sign_in.json",
                        data: {
                            'user[email]': u,
                            'user[password]':p
                        }
                    });
 
                    // return( request.then( handleSuccess, handleError ) );
                   var loginsuccess={
                      data: {'success':true,'token':'As6T68Rys2Sk1z8413xP'},
                      status: 200, 
                      statusText: 'OK'};
                    return handleSuccess(loginsuccess);
 
                }
 
 
                // I get all of the friends in the remote collection.
                function rooms() {
 
                    var request = $http({
                        method: "get",
                        url: "https://www.qisc.us/api/v1/mobile/rooms?token=As6T68Rys2Sk1z8413xP",
                        params: {
                            action: "get"
                        }
                    });
 
                    return request.then( handleSuccess, handleError );
 
                }
 
              function roomCreate( token,name ) {
 
                    var request = $http({
                        method: "post",
                        url: "https://www.qisc.us/api/v1/mobile/roomcreate",
                        params: {
                            action: "post"
                        },
                        data: {
                            'token': token,
                            'name':name
                        }
                    });
 
                    return( request.then( handleSuccess, handleError ) );
 
                }
 
              function roomDelete( token,room_id ) {
 
                    var request = $http({
                        method: "post",
                        url: "https://www.qisc.us/api/v1/mobile/roomdelete",
                        params: {
                            action: "post"
                        },
                        data: {
                            'token': token,
                            'room_id':room_id
                        }
                    });
 
                    return( request.then( handleSuccess, handleError ) );
 
                }
                function roomInvite( token,room_id,username ) {
 
                    var request = $http({
                        method: "post",
                        url: "https://www.qisc.us/api/v1/mobile/invite",
                        params: {
                            action: "post"
                        },
                        data: {
                            'token': token,
                            'room_id':room_id,
                            'username_visual':username
                        }
                    });
 
                    return( request.then( handleSuccess, handleError ) );
                 }

                 function topics( token,room_id ) {
 
                    var request = $http({
                        method: "post",
                        url: "https://www.qisc.us/api/v1/mobile/topics",
                        params: {
                            action: "post"
                        },
                        data: {
                            'token': token,
                            'room_id':room_id
                        }
                    });
 
                    return( request.then( handleSuccess, handleError ) );
 
                }

               function topicCreate( title,room_id ,token,description) {
 
                    var request = $http({
                        method: "post",
                        url: "https://www.qisc.us/api/v1/mobile/room/"+room_id+"/topic/create",
                        params: {
                            action: "post"
                        },
                        data: {
                            'token': token,
                            'title':title,
                            'description':description
                        }
                    });
 
                    return( request.then( handleSuccess, handleError ) );
 
                }

               function topicDelete( topic_id ,token) {
 
                    var request = $http({
                        method: "post",
                        url: "api/v1/mobile_topic/topicdelete",
                        params: {
                            action: "post"
                        },
                        data: {
                            'token': token,
                            'topic_id':topic_id
                        }
                    });
 
                    return( request.then( handleSuccess, handleError ) );
 
                }
                
                function commentLoad( token,topic_id ) {
                    console.log("omayib:"+token);
                    console.log("omayib:"+topic_id);
                    var request = $http({
                        method: "post",
                        url: "https://www.qisc.us/api/v1/mobile/topic/"+topic_id+"/comment/"+999000000+"/token/As6T68Rys2Sk1z8413xP"
                    });
 
                    return( request.then( handleSuccess, handleError ) );
                 }
                 function commentLoadMore( token,topic_id,lastcommentid ) {
 
                    var request = $http({
                        method: "post",
                        url: "https://www.qisc.us/api/v1/mobile/topic/"+topic_id+"/comment/"+lastcommentid+"/token/"+token,
                        params: {
                            action: "post"
                        },
                        data: {
                            'token': token,
                            'topic_id':topic_id,
                            'lastcommentid':lastcommentid
                        }
                    });
 
                    return( request.then( handleSuccess, handleError ) );
                 }
                 function commentPost( token,topic_id,comment ) {
 
                    var request = $http({
                        method: "post",
                        url: "https://www.qisc.us/api/v1/mobile/postcomment",
                        params: {
                            action: "post"
                        },
                        data: {
                            'token': token,
                            'topic_id':topic_id,
                            'comment':comment
                        }
                    });
 
                    return( request.then( handleSuccess, handleError ) );
                 }
                function commentDelete( token,comment_id ) {
 
                    var request = $http({
                        method: "post",
                        url: "https://www.qisc.us/api/v1/mobile/commentdelete",
                        params: {
                            action: "post"
                        },
                        data: {
                            'token': token,
                            'comment_id':comment_id
                        }
                    });
 
                    return( request.then( handleSuccess, handleError ) );
                 }
                function readNotif( token,topic_id ) {
 
                    var request = $http({
                        method: "post",
                        url: "https://www.qisc.us/api/v1/mobile/readnotif/"+topic_id+"?token="+token,
                        params: {
                            action: "post"
                        },
                        data: {
                            'token': token,
                            'topic_id':topic_id
                        }
                    });
 
                    return( request.then( handleSuccess, handleError ) );
                 }
                // ---
                // PRIVATE METHODS.
                // ---
 
 
                // I transform the error response, unwrapping the application dta from
                // the API response payload.
                function handleError( response ) {
 
                    // The API response from the server should be returned in a
                    // nomralized format. However, if the request was not handled by the
                    // server (or what not handles properly - ex. server error), then we
                    // may have to normalize it on our end, as best we can.
                    if (
                        ! angular.isObject( response.data ) ||
                        ! response.data.message
                        ) {
 
                        return( $q.reject( "An unknown error occurred." ) );
 
                    }
 
                    console.log(response.data.message);
                    // Otherwise, use expected error message.
                    return( $q.reject( response.data.message ) );
 
                }
 
 
                // I transform the successful response, unwrapping the application data
                // from the API response payload.
                function handleSuccess( response ) {
                    console.log('handle succes');
                    console.log(response.data);
                    console.log('end handle succes');
                    return( response.data );
 
                }
 
            }
        );
 