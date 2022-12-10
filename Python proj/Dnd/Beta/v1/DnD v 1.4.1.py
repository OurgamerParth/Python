import sys

while True:

      print("welcome to dungeons and dragons")
      w_i = input("hey adventurer are you a boy or a girl \n")
      W_I_2 = input("ok nice now which is your race choose one elves,knight,wizard/which,ninja's,dwarves (if want help type h) \n")
# when they want help
      if W_I_2 == "h":
            print("elves = can run fast and dig ")
            print("knight = can equip magic swords  and has dodging abilities")
            print("wizard/witch = can use magic spells and do rituals.")
            print("ninja's = can climb anything and has a inner beast")
            print("dwarves = can build things and uses hammer as weapon")
 

# boy and elve char
      elif w_i == "boy" and W_I_2 == "elves":
            print("nice, you are a elve you start from the city of elves or ELVINE")
            name1 = input("now what is your name boy\n ")
            print("ok nice name " + name1)
            print("now start the game by pressing enter ")


# girl and elve char

      elif w_i == "girl" and W_I_2 == "elves":
            print("nice, you are a elve you start from the city of elves or ELVINE")
            name2 = input("now what is your name girl \n")
            print("ok nice name " + name2)
            print("now start the game by pressing enter ")


# boy and knight char

      elif w_i == "boy" and W_I_2 == "knight":
            print("nice, you are a knight you start from the city of knights or GLADITOR")
            name3 = input("now what is your name boy \n")
            print("ok nice name " + name3)
            print("now start the game by pressing enter ")


#girl and knight char

      elif w_i == "girl" and W_I_2 == "knight":
            print("nice, you are a knight you start from the city of knights or GLADITOR")
            name4 = input("now what is your name girl \n")
            print("ok nice name " + name4)
            print("now start the game by pressing enter ")



#boy and wizard char
      elif w_i == "boy" and W_I_2 == "wizard":
            print("nice, you are a wizard you start from the city of wizard and whichcraft or THE SECRET CITY OF WIZARDS CALLED WINARD")
            name5 = input("now what is your name boy \n")
            print("ok nice name " + name5)
            print("now start the game by pressing enter ")


#girl and witch char

      elif w_i == "girl" and W_I_2 == "witch":
            print("nice, you are a witch you start from the city of wizard and whichcraft or THE SECRET CITY OF WIZARDS CALLED WINARD")
            name6 = input("now what is your name girl \n")
            print("ok nice name " + name6)
            print("now start the game by pressing enter ")
      
      
      
      a = input("exitng now... press Enter key to exit(or press any key to continue) \n")
      if a == "": exit()
    
