


                    TESTE DE CAIXA PRETA

    Agendamento 

                        Função do Teste:
            Verificar se os campos então recebendo algum tipo de informação.
            Verificar se os campos estão recebendo as informações necessárias.
            Verificar saída.

            14 // Respeitando o limite de programações
            15 // Número máximo de programaçoes (agendamentos)
            16 // Ultrapassando o limite de programcoes.


     Requisitos necessários: nome,idade,filme.
            
        (CASO O CÓDIGO FOR FEITO COM "ENTER" AO INVÉS DE ";")
        SIMBULOS, LETRAS E NÚMEROS PARA SEREM TESTADOS NOS CAMPOS.

        nome: FLAVIO, fLavIo, Fl4vi0, 77777, "", "," ,".", "?", "----", " nome==", ", ****, (),[], ##, ";".  
        idade: -20, 11, 0, -2, 333333333333333333, %, 2+2
        filmes: Batman, ,BATMAN, %, batman%, --, 22, ?, "", -- , * , ()


        (CÓDIGO FEITO COM ;)
        Flávio,19,Dora       // Declaração normal (sáida esperada).
        flavio; ;batman      // Idade não declarada.
         ; ;batman           // Somente o campo filme declarado.
         ;20;                // Nome e filme não declarado.
        flavio               // Somente filme declarado.
                             // Nada declarado.
        fl$vio;20;batman     // Caracteres inválidos no campo "nome"    
        flavio,20,b**man     // Caracteres inválidos no campo "filme"
        flavio,@v,batman     // Caracteres inválidos no campo "idade"
        fl$vio;@20;b**man    // Caracteres inválidos em todos os respectivos campos.
                         


    Programação 



    Requisitos necessários: nome, faixa etária, capacidade.


        CASO O CÓDIGO FOR FEITO COM "ENTER" AO INVÉS DE ";")

        nome: FLAVIO, fLavIo, Fl4vi0, 77777, "", "," ,".", "?", "----", " nome==", ", ****, (),[], ##, ";".  
        faixa etária: -20, 11, 0, -2, 333333333333333333, %, 2+2
        capacidade: -20-, 12222, @1 ,0, -2, && ,333333333333333333, %, 2+2, 22222222222222222222222222222222
    

        (CÓDIGO FEITO COM ;)

        flavio;20;3          // Declaração normal.
         ;20;3               // Declaração sem o campo "nome".
         ; ;3                // Declaração sem os campos "nome", "faixa etária".
         ; ;                 // Nada declarado.
        -2;-2;-2             // Declaração com informações inválidas.
        flavio;x;3           // Declaração com o campo "faixa etária" inválido.

        fl$vio;20;3          // Caracteres inválidos no campo "nome"    
        flavio,20,###        // Caracteres inválidos no campo "capacidade"
        flavio,@v,3          // Caracteres inválidos no campo "faixa etária"
        fl$vio;@20;x************** // Caracteres inválidos em todos os respectivos campos.


--------------------------------------------------------------------------------------------------------------------


Saída

    //Filmes, limite da sala é 3 então a prioridade é por ordem de chegada > 3 é "cortado" da sala cinema
    Dora aventureira 
    Flavio
    José
    Josthen
    //Essa pessoa não entraria na sala de cinema
    Josava

    //Filmes, limite da sala é 3 então a prioridade é por ordem de chegada > 6 é "cortado" da sala cinema
    Batman
    Geovana
    Enderson
    Jorge
    Paulo
    Paula
    Victor
    //Não entraria na sala de cinema
    Claudio

    Dr.Stranho
    Caio
    Gustavo
    Lucas

    //Sala de cinema vazia
    Vanda Vision


