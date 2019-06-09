# MY BIG BET API #

#Login

#POST

### Url: /login
#### Header:   
    Content-type   -> application/json
#### Body: 
        {
        	"userName": "Brunoo",
        	"passWord":"psg112236"
        }


#User
      
##POST 
 
### Url: /users/post
#### Header:   
     Content-type   -> application/json
#### Body: 
        {
        	"userName": "Brunoo",
        	"passWord":"chocolat"
        }
      

##PUT
 
### Url: /users/:id
#### Header:   
     Content-type   -> application/json
#### Body: 
        {
        	"userName": "Brunoo",
        	"passWord":"chocolat"
        }
 
##GET 
 
### Url: /users/:id (find one by Id)
### Url: /users (all user)
#### Header:   
     Content-type   -> application/json
#### Body: 
        No Body


##DELETE
 
### Url: /users/:id
#### Header:   
     Content-type   -> application/json
#### Body: 
        No Body
        
        
#GAMES
      
### leagueName : 
               'ldc': Champions league,
               'bpl': Premiere Ligue,
               'ligue1': Ligue 1,
               'bundesliga': Bundesliga,
               'liga': Liga,
               'seriea': Serie A
 
##GET

### Url: /games/pop/:leagueName (populate games in MongoDB)
#### Header:   
     Content-type   -> application/json
#### Body: 
        No Body
      

##GET

### Url: /games/:leagueName (get all games for the competition)
#### Header:   
     Content-type   -> application/json
#### Body: 
        No Body
 

#BET
      
##POST 
 
### Url: /bets/post
#### Header:   
     Content-type   -> application/json
#### Body: 
        {
            "user": "user_id",
            "game": "game_id",
            "scoreHommeTeam": "3",
            "scoreAwayTeam": "0"
        }
      

##PUT
 
### Url: /bets/:id
#### Header:   
     Content-type   -> application/json
#### Body: 
        {
            "user": "user_id",
            "game": "game_id",
            "scoreHommeTeam": "3",
            "scoreAwayTeam": "0"
        }
 
##GET 
 
### Url: /bets/:id (find one by Id)
#### Header:   
     Content-type   -> application/json
#### Body: 
        No Body

##GET (For a user)
 
### Url: /bets
#### Header:   
     Content-type   -> application/json
#### Body: 
        {
            "userId": "user_id"
        }