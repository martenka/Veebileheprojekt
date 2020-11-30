  function submitpressed() {
                        /*Otsime üles elemendi id-ga "email" ning võtame selle väärtuse
                        Kui väärtuse ei ole tähte "@", siis pole tegemist emailiga. Väljasta kasutajale vastus
                        https://stackoverflow.com/questions/3547035/javascript-getting-html-form-values*/
                        var emaildata = document.getElementById("email").value;
                        var nimi = document.getElementById("name").value;
                        var data = document.getElementById("subject").value;
                        /*https://stackoverflow.com/questions/4444477/how-to-tell-if-a-string-contains-a-certain-character-in-javascript*/
                        if (emaildata.indexOf("@") === -1 || nimi === "" || data === "")
                          {
                            alert("Sisestatud andmed on vigased");
                          }
                        else {
                          alert("Pöördumine saadetud");
                        }

                      }