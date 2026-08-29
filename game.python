import random
import time

# Define the board configuration
WINNING_POSITION = 100

# Snakes: Key is the mouth (head), Value is the tail (slides down)
SNAKES = {
    17: 7,
    54: 34,
    62: 19,
    64: 60,
    87: 36,
    93: 73,
    95: 75,
    98: 79
}

# Ladders: Key is the foot (bottom), Value is the top (climbs up)
LADDERS = {
    1: 38,
    4: 14,
    9: 31,
    21: 42,
    28: 84,
    51: 67,
    72: 91,
    80: 99
}

def roll_dice():
    """Simulates rolling a standard 6-sided dice."""
    return random.randint(1, 6)

def check_snake_or_ladder(position):
    """Checks if the player landed on a snake or a ladder and moves them accordingly."""
    if position in SNAKES:
        print(f"🐍 Oh no! Bitten by a snake at {position}. Sliding down to {SNAKES[position]}!")
        return SNAKES[position]
    elif position in LADDERS:
        print(f"🪜 Awesome! Climbed a ladder at {position}. Going up to {LADDERS[position]}!")
        return LADDERS[position]
    return position

def play_turn(player_name, current_position):
    """Executes a single turn for a player."""
    print(f"\n--- {player_name}'s Turn (Current Position: {current_position}) ---")
    input("Press Enter to roll the dice...")
    
    dice_value = roll_dice()
    print(f"🎲 Rolled a {dice_value}!")
    
    new_position = current_position + dice_value
    
    # Exact landing condition to win
    if new_position > WINNING_POSITION:
        print(f"Over-rolled! You need exactly {WINNING_POSITION - current_position} to win. Staying at {current_position}.")
        return current_position
    
    # Apply snake or ladder alterations
    new_position = check_snake_or_ladder(new_position)
    print(f"Moved to position {new_position}.")
    
    return new_position

def main():
    print("====================================")
    print("     Welcome to Snake & Ladder!     ")
    print("====================================\n")
    
    player1 = input("Enter Player 1 Name: ").strip() or "Player 1"
    player2 = input("Enter Player 2 Name: ").strip() or "Player 2"
    
    # Initial positions
    positions = {player1: 0, player2: 0}
    turn = 0
    players = [player1, player2]
    
    while True:
        current_player = players[turn % 2]
        
        # Play the turn
        positions[current_player] = play_turn(current_player, positions[current_player])
        
        # Check win condition
        if positions[current_player] == WINNING_POSITION:
            print(f"\n🏆🎉 CONGRATULATIONS! {current_player} wins the game! 🎉🏆")
            break
            
        turn += 1
        time.sleep(0.5)

if __name__ == "__main__":
    main()
