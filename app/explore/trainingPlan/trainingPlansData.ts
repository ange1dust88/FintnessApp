const trainingPlansData = [
    { 
        id: '0', 
        title: 'Explosive Power', 
        img: require('./assets/Explosive.jpg'), 
        duration: '4', 
        trainings: '16', 
        difficulty: 'Intermediate',
        days: {
            '1': [
                'Assisted Pull-Ups (using a resistance band or machine) - 3 rounds x 5 reps, rest 60 seconds',
                'Negative Pull-Ups (lowering down slowly from the bar) - 3 rounds x 3 reps, rest 90 seconds',
                'Lat Pulldowns - 3 rounds x 8 reps, rest 60 seconds',
                'Inverted Rows (using a barbell or TRX) - 3 rounds x 8 reps, rest 60 seconds',
                'Dead Hangs (hanging from the pull-up bar) - 3 rounds x 20-30 seconds, rest 60 seconds',
            ],
            '2': [
                'Explosive Squats - 3 rounds x 5 reps, rest 90 seconds',
                'Box Jumps - 3 rounds x 5 reps, rest 90 seconds',
                'Plyometric Push-Ups - 3 rounds x 5 reps, rest 90 seconds',
            ],
            '3': [
                'Pull-Up Progression: 3 rounds of max effort assisted pull-ups, rest 60 seconds',
                'Kettlebell Swings - 3 rounds x 12 reps, rest 60 seconds',
                'Dumbbell Snatch - 3 rounds x 8 reps each arm, rest 60 seconds',
                'Burpees - 3 rounds x 10 reps, rest 60 seconds',
            ],
            '4': [
                'Dynamic Warm-Up (including high knees, butt kicks, and arm circles) - 10 minutes',
                'Depth Jumps - 3 rounds x 5 reps, rest 90 seconds',
                'Medicine Ball Slams - 3 rounds x 8 reps, rest 60 seconds',
                'Single-Leg Box Jumps - 3 rounds x 5 reps each leg, rest 90 seconds',
            ],
            '5': [
                'Pull-Ups - 3 rounds x max reps, rest 90 seconds',
                'Jumping Lunges - 3 rounds x 10 reps each leg, rest 60 seconds',
                'Dumbbell Push Press - 3 rounds x 8 reps, rest 60 seconds',
                'Agility Ladder Drills - 10 minutes',
            ],
            '6': [
                'Weighted Pull-Ups (add weight as needed) - 3 rounds x 5 reps, rest 90 seconds',
                'Broad Jumps - 3 rounds x 5 reps, rest 90 seconds',
                'Clap Push-Ups - 3 rounds x 5 reps, rest 90 seconds',
                'Hurdle Jumps - 3 rounds x 5 reps, rest 90 seconds',
            ],
            '7': [
                'Resistance Band Pull-Aparts - 3 rounds x 12 reps, rest 60 seconds',
                'Wall Balls - 3 rounds x 10 reps, rest 60 seconds',
                'Sprints (30 meters) - 5 rounds with rest as needed',
            ],
            '8': [
                'Tire Flips (if available) - 3 rounds x 5 flips, rest 90 seconds',
                'Split Jumps - 3 rounds x 8 reps each leg, rest 60 seconds',
                'Shoulder Taps in Plank Position - 3 rounds x 10 taps each side, rest 60 seconds',
            ],
            '9': [
                'Weighted Dips - 3 rounds x 6 reps, rest 90 seconds',
                'Kettlebell Goblet Squats - 3 rounds x 10 reps, rest 60 seconds',
                'Single-Arm Dumbbell Rows - 3 rounds x 8 reps each arm, rest 60 seconds',
            ],
            '10': [
                'Pull-Up Complex (1 pull-up, 1 chin-up, 1 muscle-up) - 3 rounds, rest 90 seconds',
                'Plyo Step-Ups - 3 rounds x 5 reps each leg, rest 90 seconds',
                'Overhead Medicine Ball Throws - 3 rounds x 8 reps, rest 60 seconds',
            ],
            '11': [
                'Kipping Pull-Ups - 3 rounds x 5 reps, rest 60 seconds',
                'Jump Squats - 3 rounds x 8 reps, rest 60 seconds',
                'Plank Jacks - 3 rounds x 10 reps, rest 60 seconds',
            ],
            '12': [
                'Weighted Pull-Ups - 3 rounds x max reps, rest 90 seconds',
                'Box Drill for Explosive Power - 10 minutes (mix sprints and jumps)',
                'Single-Leg Deadlifts - 3 rounds x 8 reps each leg, rest 60 seconds',
            ],
            '13': [
                'Pull-Up Variations (mix wide grip, close grip, etc.) - 3 rounds x 5 reps each, rest 90 seconds',
                'Kettlebell Turkish Get-Ups - 3 rounds x 5 reps each side, rest 90 seconds',
                'Agility Cone Drills - 10 minutes',
            ],
            '14': [
                'Negative Pull-Ups - 3 rounds x 5 reps, rest 90 seconds',
                'Explosive Bench Press (using lighter weights for speed) - 3 rounds x 8 reps, rest 90 seconds',
                'Burpee Broad Jumps - 3 rounds x 5 reps, rest 90 seconds',
            ],
            '15': [
                'Pull-Up Circuit (max reps each variation, no rest between exercises) - 3 rounds',
                'Power Cleans (using a barbell or dumbbells) - 3 rounds x 6 reps, rest 90 seconds',
                'Tuck Jumps - 3 rounds x 5 reps, rest 60 seconds',
            ],
            '16': [
                'Max Pull-Ups - 1 set to failure',
                'Max Reps Weighted Pull-Ups - 1 set to failure',
                'Challenge: Complete all exercises from Day 1',
            ],
        },
    },
    {
        id: '1', 
        title: 'Weighted Calisthenics', 
        img: require('./assets/Weighted.jpg'), 
        duration: '4', 
        trainings: '12', 
        difficulty: 'Advanced',
        days: {
            '1': [
                'Weighted Pull-Ups - 4 rounds x 5 reps, rest 90 seconds',
                'Weighted Dips - 4 rounds x 6 reps, rest 90 seconds',
                'Weighted Push-Ups (weighted vest or plates) - 4 rounds x 8 reps, rest 90 seconds',
                'Weighted Squats (holding a dumbbell or kettlebell) - 4 rounds x 10 reps, rest 90 seconds',
            ],
            '2': [
                'Muscle-Ups (weighted if possible) - 4 rounds x 3-5 reps, rest 90 seconds',
                'Weighted Inverted Rows - 4 rounds x 6 reps, rest 90 seconds',
                'Pistol Squats (weighted) - 4 rounds x 5 reps each leg, rest 90 seconds',
                'Weighted Plank (weight on back) - 3 rounds x 30-60 seconds, rest 60 seconds',
            ],
            '3': [
                'Weighted Chin-Ups - 4 rounds x 5 reps, rest 90 seconds',
                'Archer Push-Ups (weighted) - 4 rounds x 5 reps each side, rest 90 seconds',
                'Weighted Lunges (holding weights) - 4 rounds x 8 reps each leg, rest 90 seconds',
                'Handstand Push-Ups (weighted vest if possible) - 3 rounds x 5 reps, rest 90 seconds',
            ],
            '4': [
                'Weighted Muscle-Ups - 4 rounds x 3 reps, rest 90 seconds',
                'Weighted Side Plank (hold weight on hip) - 3 rounds x 30 seconds each side, rest 60 seconds',
                'Weighted Bulgarian Split Squats - 4 rounds x 6 reps each leg, rest 90 seconds',
                'Single-Leg Calf Raises (weighted) - 4 rounds x 10 reps each leg, rest 60 seconds',
            ],
            '5': [
                'Weighted Decline Push-Ups - 4 rounds x 8 reps, rest 90 seconds',
                'Weighted Dead Hangs (add weight to the waist) - 3 rounds x 30-60 seconds, rest 60 seconds',
                'Weighted L-Sit Holds (using parallettes) - 4 rounds x 15-30 seconds, rest 60 seconds',
                'Weighted Step-Ups - 4 rounds x 8 reps each leg, rest 90 seconds',
            ],
            '6': [
                'Weighted Wide-Grip Pull-Ups - 4 rounds x 5 reps, rest 90 seconds',
                'Weighted Floor Press (using a barbell or dumbbells) - 4 rounds x 8 reps, rest 90 seconds',
                'Weighted Hollow Body Holds - 4 rounds x 30 seconds, rest 60 seconds',
                'Box Jumps (weighted vest) - 4 rounds x 5 reps, rest 90 seconds',
            ],
            '7': [
                'Weighted Ring Dips - 4 rounds x 5 reps, rest 90 seconds',
                'Weighted Push-Up Variations (elevated, decline) - 4 rounds x 6 reps, rest 90 seconds',
                'Weighted Glute Bridges - 4 rounds x 10 reps, rest 90 seconds',
                'Weighted Back Widows (hold a weight while lying on your back) - 4 rounds x 10 reps, rest 60 seconds',
            ],
            '8': [
                'Weighted Reverse Rows (using rings or a bar) - 4 rounds x 8 reps, rest 90 seconds',
                'Weighted Single-Arm Dumbbell Press - 4 rounds x 6 reps each arm, rest 90 seconds',
                'Weighted Reverse Lunges - 4 rounds x 8 reps each leg, rest 90 seconds',
                'Weighted Plank to Push-Up - 4 rounds x 5 reps, rest 90 seconds',
            ],
            '9': [
                'Weighted Chin-Up Variations (close grip, wide grip) - 4 rounds x 5 reps, rest 90 seconds',
                'Weighted Staggered Push-Ups (one hand elevated) - 4 rounds x 6 reps each side, rest 90 seconds',
                'Weighted Leg Raises (hanging) - 4 rounds x 8 reps, rest 90 seconds',
                'Weighted Farmers Walk (using heavy weights) - 4 rounds x 20 meters, rest 60 seconds',
            ],
            '10': [
                'Weighted Front Squats (using a barbell or dumbbells) - 4 rounds x 6 reps, rest 90 seconds',
                'Weighted Wall Balls - 4 rounds x 8 reps, rest 90 seconds',
                'Weighted Side Lunges - 4 rounds x 8 reps each leg, rest 90 seconds',
                'Weighted Bear Crawls - 3 rounds x 30 seconds, rest 60 seconds',
            ],
            '11': [
                'Weighted Tuck Planche Holds - 4 rounds x 10-15 seconds, rest 90 seconds',
                'Weighted Pike Push-Ups - 4 rounds x 6 reps, rest 90 seconds',
                'Weighted Hollow Rocks - 4 rounds x 10 reps, rest 60 seconds',
                'Weighted Jumping Squats - 4 rounds x 5 reps, rest 90 seconds',
            ],
            '12': [
                'Max Weighted Pull-Ups - 1 set to failure',
                'Max Weighted Dips - 1 set to failure',
                'Challenge: Complete all exercises from Day 1',
            ],
        },
    },
    {
        id: '2', 
        title: 'First Pull Up', 
        img: require('./assets/firstpullup.jpg'), 
        duration: '2', 
        trainings: '6', 
        difficulty: 'Beginner',
        days: {
            '1': [
                'Assisted Pull-Ups (using a resistance band or machine) - 4 rounds x 5 reps, rest 90 seconds',
                'Negative Pull-Ups (slowly lowering from the bar) - 4 rounds x 3 reps, rest 90 seconds',
                'Lat Pulldowns (light weight) - 3 rounds x 8 reps, rest 60 seconds',
                'Dead Hangs (hanging from the pull-up bar) - 3 rounds x 20-30 seconds, rest 60 seconds',
            ],
            '2': [
                'Australian Pull-Ups (inverted rows) - 4 rounds x 6 reps, rest 90 seconds',
                'Scapular Pull-Ups (engaging the shoulder blades) - 4 rounds x 6 reps, rest 90 seconds',
                'Jumping Pull-Ups (using momentum to assist) - 3 rounds x 5 reps, rest 90 seconds',
                'Core Activation (planks or hollow holds) - 3 rounds x 30 seconds, rest 60 seconds',
            ],
            '3': [
                'Negative Pull-Ups - 4 rounds x 4 reps, rest 90 seconds',
                'Band-Resisted Pull-Ups - 3 rounds x 5 reps, rest 90 seconds',
                'Lat Pulldowns (increase weight slightly) - 4 rounds x 6 reps, rest 60 seconds',
                'Hollow Body Hold - 3 rounds x 20 seconds, rest 60 seconds',
            ],
            '4': [
                'Assisted Pull-Ups - 4 rounds x 6 reps, rest 90 seconds',
                'Bodyweight Rows (using a bar or rings) - 4 rounds x 6 reps, rest 90 seconds',
                'Core Activation (hollow rocks or leg raises) - 3 rounds x 10 reps, rest 60 seconds',
                'Dead Hangs (aim for longer time) - 3 rounds x 30-40 seconds, rest 60 seconds',
            ],
            '5': [
                'Scapular Pull-Ups - 4 rounds x 8 reps, rest 90 seconds',
                'Jumping Pull-Ups (focus on landing softly) - 4 rounds x 5 reps, rest 90 seconds',
                'Assisted Pull-Ups - 4 rounds x 5 reps, rest 90 seconds',
                'Core Activation (side planks) - 3 rounds x 20 seconds each side, rest 60 seconds',
            ],
            '6': [
                'Max Attempt Pull-Ups (try for one unassisted pull-up) - 1 set to failure',
                'Negative Pull-Ups - 3 rounds x 3 reps, rest 90 seconds',
                'Bodyweight Rows - 3 rounds x 6 reps, rest 90 seconds',
                'Core Activation (plank) - 3 rounds x 30 seconds, rest 60 seconds',
            ],
        }
    },
    
    
    {
        id: '3', 
        title: 'Core Stability', 
        img: require('./assets/corestability.webp'), 
        duration: '5', 
        trainings: '15', 
        difficulty: 'Beginner',
        days: {
            '1': [
                'Plank - 3 rounds x 20-30 seconds, rest 60 seconds',
                'Dead Bug - 3 rounds x 10 reps (each side), rest 60 seconds',
                'Bird-Dog - 3 rounds x 10 reps (each side), rest 60 seconds',
                'Glute Bridge - 3 rounds x 10 reps, rest 60 seconds',
            ],
            '2': [
                'Side Plank - 3 rounds x 15-20 seconds (each side), rest 60 seconds',
                'Russian Twists (without weight) - 3 rounds x 10 reps (each side), rest 60 seconds',
                'Mountain Climbers - 3 rounds x 15 reps (each side), rest 60 seconds',
                'Superman Hold - 3 rounds x 20 seconds, rest 60 seconds',
            ],
            '3': [
                'Plank with Shoulder Taps - 3 rounds x 10 reps (each side), rest 60 seconds',
                'Leg Raises - 3 rounds x 8-10 reps, rest 60 seconds',
                'Bicycle Crunches - 3 rounds x 10 reps (each side), rest 60 seconds',
                'Glute Bridge March - 3 rounds x 10 reps (each leg), rest 60 seconds',
            ],
            '4': [
                'Plank - 3 rounds x 30 seconds, rest 60 seconds',
                'Dead Bug - 3 rounds x 12 reps (each side), rest 60 seconds',
                'Bird-Dog - 3 rounds x 12 reps (each side), rest 60 seconds',
                'Side-Lying Leg Lifts - 3 rounds x 10 reps (each side), rest 60 seconds',
            ],
            '5': [
                'Russian Twists (with light weight) - 3 rounds x 10 reps (each side), rest 60 seconds',
                'Mountain Climbers - 3 rounds x 20 reps (each side), rest 60 seconds',
                'Plank with Leg Lift - 3 rounds x 10 reps (each leg), rest 60 seconds',
                'Superman - 3 rounds x 10 reps, rest 60 seconds',
            ],
            '6': [
                'Side Plank - 3 rounds x 20-30 seconds (each side), rest 60 seconds',
                'V-Ups - 3 rounds x 8 reps, rest 60 seconds',
                'Flutter Kicks - 3 rounds x 15 reps (each leg), rest 60 seconds',
                'Wall Sit - 3 rounds x 30 seconds, rest 60 seconds',
            ],
            '7': [
                'Plank with Hip Dips - 3 rounds x 10 reps (each side), rest 60 seconds',
                'Leg Raises - 3 rounds x 10-12 reps, rest 60 seconds',
                'Bicycle Crunches - 3 rounds x 12 reps (each side), rest 60 seconds',
                'Glute Bridge Hold - 3 rounds x 20-30 seconds, rest 60 seconds',
            ],
            '8': [
                'Plank - 3 rounds x 30-40 seconds, rest 60 seconds',
                'Dead Bug - 3 rounds x 12 reps (each side), rest 60 seconds',
                'Bird-Dog - 3 rounds x 12 reps (each side), rest 60 seconds',
                'Superman Hold - 3 rounds x 30 seconds, rest 60 seconds',
            ],
            '9': [
                'Side Plank - 3 rounds x 30-40 seconds (each side), rest 60 seconds',
                'Russian Twists - 3 rounds x 12 reps (each side), rest 60 seconds',
                'Mountain Climbers - 3 rounds x 20 reps (each side), rest 60 seconds',
                'Glute Bridge March - 3 rounds x 12 reps (each leg), rest 60 seconds',
            ],
            '10': [
                'Plank with Shoulder Taps - 3 rounds x 12 reps (each side), rest 60 seconds',
                'Leg Raises - 3 rounds x 10-12 reps, rest 60 seconds',
                'Bicycle Crunches - 3 rounds x 12 reps (each side), rest 60 seconds',
                'Hollow Body Hold - 3 rounds x 20 seconds, rest 60 seconds',
            ],
            '11': [
                'Plank - 3 rounds x 40 seconds, rest 60 seconds',
                'Bird-Dog - 3 rounds x 15 reps (each side), rest 60 seconds',
                'Dead Bug - 3 rounds x 15 reps (each side), rest 60 seconds',
                'Superman - 3 rounds x 12 reps, rest 60 seconds',
            ],
            '12': [
                'Side Plank - 3 rounds x 40 seconds (each side), rest 60 seconds',
                'Russian Twists - 3 rounds x 15 reps (each side), rest 60 seconds',
                'Flutter Kicks - 3 rounds x 20 reps (each leg), rest 60 seconds',
                'Wall Sit - 3 rounds x 40 seconds, rest 60 seconds',
            ],
            '13': [
                'Plank with Hip Dips - 3 rounds x 12 reps (each side), rest 60 seconds',
                'Leg Raises - 3 rounds x 12-15 reps, rest 60 seconds',
                'Bicycle Crunches - 3 rounds x 15 reps (each side), rest 60 seconds',
                'Glute Bridge Hold - 3 rounds x 30 seconds, rest 60 seconds',
            ],
            '14': [
                'Plank - 3 rounds x 45 seconds, rest 60 seconds',
                'Dead Bug - 3 rounds x 15 reps (each side), rest 60 seconds',
                'Bird-Dog - 3 rounds x 15 reps (each side), rest 60 seconds',
                'Superman Hold - 3 rounds x 30-40 seconds, rest 60 seconds',
            ],
            '15': [
                'Max Hold Plank - 1 set to failure',
                'Russian Twists - 3 rounds x 15 reps (each side), rest 60 seconds',
                'Core Activation (your favorite core exercise) - 3 rounds x 10-12 reps, rest 60 seconds',
                'Cool Down Stretch (focus on core and back stretches) - 5-10 minutes',
            ],
        },
    }
    
];

export default trainingPlansData;