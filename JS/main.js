            $("#esp").click(function() {
                $('#logo1').slideDown('slow');
                $('#logo').slideDown('slow')
                var t = document.getElementById("ringt");
                var q = document.getElementById("chef");
                var r = document.getElementById("postres");
                var s = document.getElementById("cocteles");
                var u = document.getElementById("platos");
                var v = document.getElementById("sushi");
                var w = document.getElementById("entradas");
                var x = document.getElementById("hijo4"); 
                var y = document.getElementById("bebidas"); 
                var z = document.getElementById("asi1"); 
                setTimeout(function() {
                    $("#hijo").fadeOut(600);
                },900);
                if (y.style.display === "block") 
                {
                    y.style.display = "none";
                    z.style.display = "block";
                    w.style.display = "none";
                    v.style.display = "none";
                    r.style.display = "none";
                    q.style.display = "none";
                } 
                else if(w.style.display === "block"){
                    
                    y.style.display = "none";
                    z.style.display = "block";
                    w.style.display = "none";
                    v.style.display = "none";
                    r.style.display = "none";
                    q.style.display = "none";
                }
                else if(v.style.display === "block"){
                    
                    y.style.display = "none";
                    z.style.display = "block";
                    w.style.display = "none";
                    v.style.display = "none";
                    r.style.display = "none";
                    q.style.display = "none";
                }
                else if(u.style.display === "block"){
                    
                    y.style.display = "none";
                    z.style.display = "block";
                    w.style.display = "none";
                    v.style.display = "none";
                    u.style.display = "none";
                    r.style.display = "none";
                    q.style.display = "none";
                }
                else if(s.style.display === "block"){
                    
                    y.style.display = "none";
                    z.style.display = "block";
                    w.style.display = "none";
                    v.style.display = "none";
                    s.style.display = "none";
                    r.style.display = "none";
                    q.style.display = "none";
                }
                else if(r.style.display === "block"){
                    
                    y.style.display = "none";
                    z.style.display = "block";
                    w.style.display = "none";
                    v.style.display = "none";
                    s.style.display = "none";
                    r.style.display = "none";
                    q.style.display = "none";
                }
                else if(q.style.display === "block"){
                    
                    y.style.display = "none";
                    z.style.display = "block";
                    w.style.display = "none";
                    v.style.display = "none";
                    s.style.display = "none";
                    r.style.display = "none";
                    q.style.display = "none";
                }
    
                setTimeout(function() {
                    x.style.display = "block";
                    t.style.display = "block";
                    $("#hijo1").fadeIn();
                    TweenMax.from("#asi1", 0.4, { scale: 0, ease: "none" });
                    TweenMax.to("#asi1", 0.4, { scale: 1, ease: "none" });
                },900);
            });
            
            $("#Bebidas").click(function() {
                
                $('#logo1').slideDown('slow');
                $('#logo').slideDown('slow');
                setTimeout(function() {
                    $("#asi1").fadeOut(50);
                },910);
                
    
                setTimeout(function() {
                    
                    $("#bebidas").fadeIn();
                    TweenMax.from("#bebidas", 0.4, { scale: 0, ease: "none" });
                    TweenMax.to("#bebidas", 0.4, { scale: 1, ease: "none" });
                },900);
            });
            $("#Entradas").click(function() {
                
                $('#logo1').slideDown('slow');
                $('#logo').slideDown('slow');
                setTimeout(function() {
                    $("#asi1").fadeOut(50);
                },910);
                
    
                setTimeout(function() {
                    
                    $("#entradas").fadeIn();
                    TweenMax.from("#entradas", 0.4, { scale: 0, ease: "none" });
                    TweenMax.to("#entradas", 0.4, { scale: 1, ease: "none" });
                },900);
            });
            $("#Sushi").click(function() {
                
                $('#logo1').slideDown('slow');
                $('#logo').slideDown('slow');
                setTimeout(function() {
                    $("#asi1").fadeOut(50);
                },910);
                
    
                setTimeout(function() {
                    
                    $("#sushi").fadeIn();
                    TweenMax.from("#sushi", 0.4, { scale: 0, ease: "none" });
                    TweenMax.to("#sushi", 0.4, { scale: 1, ease: "none" });
                },900);
            });
            $("#Platos").click(function() {
                
                $('#logo1').slideDown('slow');
                $('#logo').slideDown('slow');
                setTimeout(function() {
                    $("#asi1").fadeOut(50);
                },910);
                
    
                setTimeout(function() {
                    
                    $("#platos").fadeIn();
                    TweenMax.from("#platos", 0.4, { scale: 0, ease: "none" });
                    TweenMax.to("#platos", 0.4, { scale: 1, ease: "none" });
                },900);
            });
            $("#Cocteles").click(function() {
                
                $('#logo1').slideDown('slow');
                $('#logo').slideDown('slow');
                setTimeout(function() {
                    $("#asi1").fadeOut(50);
                },910);
                
    
                setTimeout(function() {
                    
                    $("#cocteles").fadeIn();
                    TweenMax.from("#cocteles", 0.4, { scale: 0, ease: "none" });
                    TweenMax.to("#cocteles", 0.4, { scale: 1, ease: "none" });
                },900);
            });
            $("#Postres").click(function() {
                
                $('#logo1').slideDown('slow');
                $('#logo').slideDown('slow');
                setTimeout(function() {
                    $("#asi1").fadeOut(50);
                },910);
                
    
                setTimeout(function() {
                    
                    $("#postres").fadeIn();
                    TweenMax.from("#postres", 0.4, { scale: 0, ease: "none" });
                    TweenMax.to("#postres", 0.4, { scale: 1, ease: "none" });
                },900);
            });
            $("#Chef").click(function() {
                $('#logo1').slideUp('slow');
                $('#logo').slideUp('slow');
               
                setTimeout(function() {
                    $('#asi1').slideUp('slow');
                });
                
    
                setTimeout(function() {
                    $("#chef").fadeIn();
                    TweenMax.from("#chef", 0.4, { scale: 0, ease: "none" });
                    TweenMax.to("#chef", 0.4, { scale: 1, ease: "none" });
                },900);
            });
            function myFunction() {
                $('#logo1').slideDown('slow');
                                            $('#logo').slideDown('slow');
                var q = document.getElementById("chef");
                var r = document.getElementById("postres");
                var t = document.getElementById("cocteles");
                var v = document.getElementById("platos");
                var w = document.getElementById("sushi");
                var x = document.getElementById("bebidas");
                var y = document.getElementById("asi1");
                var z = document.getElementById("entradas");
                if (x.style.display === "none") 
                {
                 
                    w.style.display = "none";
                    x.style.display = "block";
                    y.style.display = "none";
                    z.style.display = "none";
                    v.style.display = "none";
                    t.style.display = "none";
                    r.style.display = "none";
                    q.style.display = "none";
                } 
                else 
                {
                    x.style.display = "none";
                    y.style.display = "block";
                    
                }
                }
            function myFunction0() {
                var x = document.getElementById("main-menu");
                
                if (x.style.display === "none") 
                {
                    $("#main-menu")
                    .animate({'left' :  'show'},2000)
                    ;
                } 
                else 
                {
                    x.style.display = "none";
                    
                    
                }
                }
                function myFunction1() {
                    $('#logo1').slideDown('slow');
                                            $('#logo').slideDown('slow');
                    var q = document.getElementById("chef");
                    var r = document.getElementById("postres");
                    var t = document.getElementById("cocteles");
                    var v = document.getElementById("platos");
                    var w = document.getElementById("sushi");
                    var x = document.getElementById("entradas");
                    var y = document.getElementById("asi1");
                    var z = document.getElementById("bebidas");
                    if (x.style.display === "none") 
                    {
                        x.style.display = "block";
                        y.style.display = "none";
                        z.style.display = "none";
                        w.style.display = "none";
                        v.style.display = "none";
                        t.style.display = "none";
                        r.style.display = "none";
                        q.style.display = "none";
                    } 
                    else 
                    {
                        x.style.display = "none";
                        y.style.display = "block";
                    }
                    }
                    function myFunction2() {
                        $('#logo1').slideDown('slow');
                                            $('#logo').slideDown('slow');
                        var q = document.getElementById("chef");
                        var r = document.getElementById("postres");
                        var t = document.getElementById("cocteles");
                        var v = document.getElementById("platos");
                        var w = document.getElementById("sushi");
                        var x = document.getElementById("entradas");
                        var y = document.getElementById("asi1");
                        var z = document.getElementById("bebidas");
                        if (w.style.display === "none") 
                        {
                            w.style.display = "block";
                            y.style.display = "none";
                            z.style.display = "none";
                            x.style.display = "none";
                            v.style.display = "none";
                            t.style.display = "none";
                            r.style.display = "none";
                            q.style.display = "none";
                        } 
                        else 
                        {
                            w.style.display = "none";
                            y.style.display = "block";
                        }
                        }
                        function myFunction3() {
                            $('#logo1').slideDown('slow');
                                            $('#logo').slideDown('slow');
                            var q = document.getElementById("chef");
                            var r = document.getElementById("postres");
                            var t = document.getElementById("cocteles");
                            var v = document.getElementById("platos");
                            var w = document.getElementById("sushi");
                            var x = document.getElementById("entradas");
                            var y = document.getElementById("asi1");
                            var z = document.getElementById("bebidas");
                            if (v.style.display === "none") 
                            {
                                v.style.display = "block";
                                w.style.display = "none";
                                y.style.display = "none";
                                z.style.display = "none";
                                x.style.display = "none";
                                t.style.display = "none";
                                r.style.display = "none";
                                q.style.display = "none";
                            } 
                            else 
                            {
                                v.style.display = "none";
                                y.style.display = "block";
                            }
                            }
                            function myFunction4() {
                                $('#logo1').slideDown('slow');
                                            $('#logo').slideDown('slow');
                                var q = document.getElementById("chef");
                                var r = document.getElementById("postres");
                                var t = document.getElementById("cocteles");
                                var v = document.getElementById("platos");
                                var w = document.getElementById("sushi");
                                var x = document.getElementById("entradas");
                                var y = document.getElementById("asi1");
                                var z = document.getElementById("bebidas");
                                if (t.style.display === "none") 
                                {
                                    
                                    t.style.display = "block";
                                    v.style.display = "none";
                                    w.style.display = "none";
                                    y.style.display = "none";
                                    z.style.display = "none";
                                    x.style.display = "none";
                                    r.style.display = "none";
                                    q.style.display = "none";
                                } 
                                else 
                                {
                                    t.style.display = "none";
                                    y.style.display = "block";
                                }
                                }
                                function myFunction5() {
                                    $('#logo1').slideDown('slow');
                                            $('#logo').slideDown('slow');
                                    var q = document.getElementById("chef");
                                    var r = document.getElementById("postres");
                                    var t = document.getElementById("cocteles");
                                    var v = document.getElementById("platos");
                                    var w = document.getElementById("sushi");
                                    var x = document.getElementById("entradas");
                                    var y = document.getElementById("asi1");
                                    var z = document.getElementById("bebidas");
                                    if (r.style.display === "none") 
                                    {
                                      
                                        r.style.display = "block";
                                        v.style.display = "none";
                                        w.style.display = "none";
                                        y.style.display = "none";
                                        z.style.display = "none";
                                        x.style.display = "none";
                                        t.style.display = "none";
                                        q.style.display = "none";
                                    } 
                                    else 
                                    {
                                        r.style.display = "none";
                                        y.style.display = "block";
                                    }
                                    }
                                    function myFunction6() {
                                        $('#logo1').slideDown('slow');
                                            $('#logo').slideDown('slow');
                                        var q = document.getElementById("chef");
                                        var r = document.getElementById("postres");
                                        var t = document.getElementById("cocteles");
                                        var v = document.getElementById("platos");
                                        var w = document.getElementById("sushi");
                                        var x = document.getElementById("entradas");
                                        var y = document.getElementById("asi1");
                                        var z = document.getElementById("bebidas");
                                        if (q.style.display === "none") 
                                        {
                                            $('#logo1').slideUp('slow');
                                            $('#logo').slideUp('slow');
                                            r.style.display = "none";
                                            v.style.display = "none";
                                            w.style.display = "none";
                                            y.style.display = "none";
                                            z.style.display = "none";
                                            x.style.display = "none";
                                            t.style.display = "none";
                                            q.style.display = "block";
                                        } 
                                        else 
                                        {
                                            q.style.display = "none";
                                            y.style.display = "block";
                                        }
                                        }
                                        function myFunction7() {
                                            
                                            var p = document.getElementById("container");
                                            if (p.style.display === "none") 
                                            {
                                                $('#container').slideDown('slow');
                                            } 
                                            else if( p.style.display = "block")
                                            {
                                                $('#container').slideUp('slow');
                                            }
                                            }
                $("#home").click(function() {
                    var x = document.getElementById("hijo4"); 
                    var y = document.getElementById("hijo1"); 
                    
                    setTimeout(function() {
                        $(this).fadeOut(600);
                    },900);
                    
        
                    setTimeout(function() {
                        x.style.display = "none";
                        y.style.display = "none";
                        $("#hijo").fadeIn();
                        TweenMax.from("#asi1", 0.4, { scale: 0, ease: "none" });
                        TweenMax.to("#asi1", 0.4, { scale: 1, ease: "none" });
                    },900);
                });

                