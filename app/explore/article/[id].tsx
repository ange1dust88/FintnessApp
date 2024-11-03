import { LinearGradient } from 'expo-linear-gradient';
import { Stack, useGlobalSearchParams } from 'expo-router';
import React from 'react';
import { Text, Image, StyleSheet, ScrollView, ImageBackground} from 'react-native';

type ArticleContent = {
  title: string;
  content: string;
  img: number; 
};

const articleContent: Record<string, ArticleContent> = {
    '0': { 
    title: 'Muscle Gain Tips', 
    content: 'Introduction to Muscle Gain: Building muscle is a common goal for many fitness enthusiasts. To achieve significant muscle growth, it’s essential to follow a structured strength training program and prioritize proper nutrition.\n\nKey Exercises for Muscle Growth: Focus on compound exercises like squats, deadlifts, and bench presses, as these movements engage multiple muscle groups and stimulate greater muscle growth. Aim for 0.7 to 1 gram of protein per pound of body weight daily to support muscle repair and growth.\n\nBalancing Your Workout Routine: Incorporate a variety of exercises to target different muscle groups, ensuring balanced development across your body. Don’t hesitate to explore isolation exercises like bicep curls and tricep extensions to refine specific areas. Additionally, vary your rep ranges; use lower reps for strength and higher reps for hypertrophy to keep your muscles challenged.\n\nNutritional Considerations: Pay attention to your caloric intake; a slight surplus of calories can help fuel your workouts and promote muscle gain. Consider including whole foods rich in healthy fats, such as avocados and nuts, to support hormone production and overall health.\n\nThe Importance of Recovery: Don’t forget the importance of recovery—allow your muscles time to repair and adapt by including rest days in your routine. Adequate sleep, hydration, and post-workout nutrition are crucial for recovery. Incorporating active recovery days can also help maintain your fitness levels while allowing your muscles to recover.\n\nStaying Consistent and Tracking Progress: Stay consistent with your training, track your progress over time, and you’ll see the results of your hard work and dedication. Consider keeping a training log to monitor your lifts and adjust your program as necessary. Remember, building muscle is a marathon, not a sprint; stay committed and patient for the best results.', 
    img: require('./assets/trainingGain.jpg'), 
  },
    '1': { 
    title: 'Importance of Core', 
    content: 'A strong core is foundational to overall strength, stability, and functional movement. While often associated with just the abdominal muscles, the core includes a complex network of muscles extending beyond the abs, involving the lower back, pelvis, and hips. These muscles work together to stabilize the spine, support movement, and protect against injury.\n\nCore Anatomy and Function: Understanding the anatomy of the core helps to appreciate its significance. Key muscles in the core include the rectus abdominis, obliques, transverse abdominis, and erector spinae, among others. These muscles contribute to posture, balance, and stability, allowing the body to move efficiently. A strong core enhances your ability to perform daily activities with ease and reduces the risk of strain or injury from improper form or weakness.\n\nBenefits of a Strong Core: Beyond aesthetics, a strong core is essential for almost every physical task. It enhances athletic performance, improves endurance, and aids in balance and coordination. Core stability allows for more effective and powerful movements in exercises like squats, deadlifts, and overhead presses, by providing a solid foundation. Additionally, it supports movements that require flexibility, like yoga and pilates, and promotes efficient energy transfer between the upper and lower body.\n\nEffective Core Exercises: To build a well-rounded core, incorporate a mix of stability, strength, and rotational exercises. Planks, for example, are an excellent way to engage multiple core muscles simultaneously, while exercises like Russian twists and bicycle crunches add a rotational component. Compound lifts such as deadlifts and squats also engage the core, making them effective additions to a core-strengthening routine. Other moves, like leg raises and mountain climbers, further challenge the core and develop endurance.\n\nPractical Tips for Core Training: Approach core training with consistency and variety. Include core exercises 2-3 times per week as part of your workout regimen. Avoid overtraining by allowing rest days, as the core muscles need recovery time just like any other muscle group. Combine core exercises with a full-body workout routine to achieve balanced muscle development. Additionally, focus on proper form to maximize effectiveness and reduce the risk of strain.\n\nMaintaining Core Strength Over Time: Core strength training is not a one-time goal but an ongoing process. Incorporate both static and dynamic core exercises regularly, and be mindful of core engagement in daily activities. The rewards of a strong core are vast, contributing to better posture, enhanced athletic performance, and reduced back pain, among other health benefits. Remember, a strong core is the foundation of a strong body, supporting you through life’s activities with stability and resilience.',
    img: require('./assets/trainingImportanceOfCore.jpg')
  },
  '2': { 
    title: 'Calisthenics Fundamentals', 
    content: 'Calisthenics offers a unique, equipment-free approach to fitness, focusing on using body weight for resistance. This method of training emphasizes functional strength, endurance, and control while enhancing flexibility and mobility. The beauty of calisthenics lies in its accessibility; with no equipment needed, it can be performed almost anywhere, making it a popular choice for people seeking a versatile workout routine.\n\nPrinciples of Calisthenics: Calisthenics relies on mastering your body weight to perform exercises that mimic natural movement patterns. This approach enhances balance, stability, and coordination by requiring multiple muscle groups to work together. Movements such as pushing, pulling, and core engagement are central to calisthenics. Additionally, this style of training promotes body awareness, which is vital for preventing injury and maximizing performance in other physical activities.\n\nFundamental Moves to Start With: Beginners should focus on foundational calisthenics exercises, such as push-ups, pull-ups, squats, and planks. These exercises target major muscle groups and build the strength required for more advanced movements. Push-ups and pull-ups develop upper body strength, squats strengthen the lower body, and planks engage the core. As you progress, incorporating exercises like dips, lunges, and bridges can help you build well-rounded strength across your entire body.\n\nProgression and Skill Development: One of the unique aspects of calisthenics is its progression system, which allows individuals to move from basic to advanced exercises as strength and control increase. For instance, once comfortable with push-ups, a person can move to more challenging variations like diamond push-ups or decline push-ups. Similarly, mastering a pull-up can open the door to advanced moves such as muscle-ups and levers. Progressions keep the workouts challenging and engaging, motivating individuals to continually improve their skills and strength.\n\nBenefits of Calisthenics: Calisthenics not only builds strength and endurance but also significantly improves flexibility, mobility, and posture. By engaging stabilizing muscles, calisthenics enhances joint stability and reduces the risk of injury. The constant core engagement required for calisthenics exercises also promotes a strong midsection, which is vital for maintaining a balanced and resilient body. Moreover, calisthenics workouts can be highly customizable, making it easy to adjust intensity based on fitness level.\n\nTips for Safe Progression: Safety is essential when progressing in calisthenics. Always prioritize good form over quantity to avoid strain or injury. It’s helpful to progress slowly, allowing the muscles and joints time to adapt to new challenges. Warming up before a workout and incorporating flexibility exercises, such as dynamic stretches, can also reduce the risk of injury. Consistency is key, so establish a routine that allows you to train regularly and watch your strength and skills grow over time.\n\nIncorporating Calisthenics into Your Routine: Calisthenics can be a complete workout regimen on its own or combined with other forms of training. Start with three days a week, focusing on different muscle groups each day to allow for recovery. As your skills improve, consider incorporating circuit-style workouts for higher intensity or practicing specific skills like handstands and pistol squats to challenge your body in new ways. Over time, calisthenics can help you achieve remarkable strength, body control, and resilience.',
    img: require('./assets/trainingPull.jpg')
  },
  '3': { 
    title: 'Bodybuilding Nutrition Essentials', 
    content: 'Nutrition is a core component of effective muscle building. Achieving optimal gains requires a balance of macronutrients—proteins, carbohydrates, and fats—combined with the right micronutrients to aid in muscle recovery and growth. In this article, we explore essential nutrition principles to help you reach your bodybuilding goals effectively and sustainably.\n\nImportance of Protein: Protein is often considered the most critical macronutrient for muscle growth. It provides the amino acids needed for repairing and building muscle tissue after intense workouts. Aim to consume high-quality protein sources, such as lean meats, fish, eggs, and plant-based options like beans and tofu. A general guideline is to consume between 0.7 to 1 gram of protein per pound of body weight daily to ensure muscle repair and growth.\n\nCarbohydrates for Energy and Recovery: Carbohydrates are your body’s primary energy source, and they play a vital role in fueling your workouts and aiding in recovery. Complex carbs, such as whole grains, fruits, and vegetables, provide sustained energy, while simple carbs are beneficial post-workout for quick glycogen replenishment. To optimize workout performance and recovery, consider consuming a carb-rich snack before training and a balanced meal post-training.\n\nHealthy Fats for Hormonal Balance: Fats are essential for hormone production, particularly testosterone, which is crucial for muscle growth. Incorporate healthy fats from sources like avocados, nuts, seeds, and olive oil. Avoid excessive consumption of processed fats, as they can negatively impact your overall health. Including a moderate amount of healthy fats in your diet will help maintain energy levels and support muscle development.\n\nMicronutrients and Their Role: Vitamins and minerals are often overlooked but are essential for muscle function and recovery. For example, Vitamin D plays a role in muscle health, while magnesium and calcium are important for muscle contractions and reducing cramps. Incorporate a variety of fruits and vegetables into your diet to ensure adequate intake of these vital nutrients. Multivitamin supplements can also help fill any nutritional gaps.\n\nMeal Timing and Frequency: Timing your meals can help optimize energy levels throughout the day and support muscle growth. Many bodybuilders benefit from eating smaller, frequent meals, as it provides a steady supply of nutrients. Aim for three main meals and two to three snacks spread evenly to maintain energy and prevent muscle breakdown. Focus on consuming a balanced meal containing protein, carbs, and healthy fats before and after workouts.\n\nHydration for Optimal Performance: Staying hydrated is crucial for muscle function, performance, and recovery. Dehydration can lead to muscle fatigue and reduced strength. Aim to drink water consistently throughout the day, and consider adding electrolytes if you engage in intense workouts. For optimal performance, monitor your hydration before, during, and after training sessions.\n\nSample Meal Plan for Bodybuilding: Here’s a sample daily meal plan to support muscle growth:\n\n- **Breakfast**: Scrambled eggs with spinach, whole-grain toast, and avocado.\n- **Mid-Morning Snack**: Greek yogurt with berries and a handful of almonds.\n- **Lunch**: Grilled chicken breast, quinoa, mixed vegetables, and a side salad.\n- **Pre-Workout Snack**: Banana with a small handful of nuts.\n- **Post-Workout Meal**: Protein shake with oats and a piece of fruit.\n- **Dinner**: Baked salmon, sweet potato, steamed broccoli, and olive oil drizzle.\n\nConsistency and Personalization: Finally, consistency is key. Tailor your nutrition plan to suit your individual needs and preferences, and consider consulting a nutritionist to create a personalized diet plan. By fueling your body with the right nutrients and staying disciplined, you’ll maximize your muscle-building potential and achieve lasting results.',
    img: require('./assets/articlesFood.webp')
  },

  '4': { 
    title: 'Powerlifting: The Big Three', 
    content: 'Powerlifting is a strength sport that revolves around three primary lifts—squat, deadlift, and bench press—often referred to as the "big three." Each of these lifts plays a unique role in developing full-body strength and power. This article provides a comprehensive look at each lift, including tips on form, technique, and the benefits they bring to overall athletic performance.\n\nThe Squat: Known as the king of lower body exercises, the squat is fundamental for building strength in the legs, hips, and core. Squats engage multiple muscle groups, particularly the quadriceps, hamstrings, glutes, and core, making it a highly effective compound movement. A proper squat involves maintaining a strong, stable core, driving through the heels, and achieving depth to ensure muscle activation. Different squat variations, such as high bar, low bar, and front squats, can be used to target specific muscle groups.\n\nThe Deadlift: The deadlift is one of the best lifts for developing posterior chain strength, which includes the hamstrings, glutes, lower back, and traps. It mimics a natural movement pattern of lifting objects off the ground and builds functional strength applicable to everyday activities. Deadlifts require a strong grip and excellent core stability to protect the lower back. Key deadlift variations include conventional, sumo, and Romanian deadlifts, each focusing on different aspects of the posterior chain.\n\nThe Bench Press: As the primary upper-body movement in powerlifting, the bench press targets the chest, shoulders, and triceps. It’s essential for building pushing strength and upper-body stability. When performing a bench press, it’s crucial to maintain shoulder stability, control the bar path, and engage the triceps and chest effectively. Variations like the incline bench press or close-grip bench can help isolate specific muscle areas and address weaknesses.\n\nHow the Big Three Work Together: These three lifts complement one another and contribute to overall strength development. Squats and deadlifts emphasize lower body and core stability, which is crucial for supporting heavy weights during the bench press. Together, they create a balanced foundation, enhancing both lower and upper body strength. Incorporating all three lifts helps build resilience, improves joint stability, and encourages overall muscular development.\n\nBenefits of Powerlifting: Beyond building raw strength, powerlifting promotes mental toughness, discipline, and consistency. Powerlifters often set goals based on personal records (PRs), which motivate them to progress incrementally. Moreover, practicing these compound lifts increases bone density and supports functional fitness, which aids in preventing injuries and improving performance in other sports or daily activities.\n\nGetting Started with Powerlifting: For those new to powerlifting, it’s essential to start with lighter weights to master technique. Working with a coach or experienced lifter can help prevent injuries and ensure you’re using the correct form. A progressive overload approach—gradually increasing the weight—allows for safe and steady strength gains. Tracking your progress, taking adequate rest days, and maintaining a balanced diet are also key components of an effective powerlifting routine.\n\nBuilding a Routine Around the Big Three: While powerlifting focuses on these three core lifts, accessory exercises like rows, lunges, and tricep extensions can enhance performance and address muscle imbalances. A well-rounded powerlifting routine typically includes days focused on each lift and incorporates accessory work to build supporting muscles, reduce injury risk, and improve overall lift performance.\n\nConclusion: Powerlifting’s "big three" are not only fundamental for strength development but also foster mental resilience and focus. By committing to these lifts, whether for competitive powerlifting or personal fitness, you’ll cultivate both physical and mental strength, pushing the limits of your abilities while gaining a deeper understanding of effective training practices.',
    img: require('./assets/bigThree.jpg')
  },

  '5': { 
  title: 'Advanced Bodyweight Techniques', 
  content: 'Advanced bodyweight techniques in calisthenics provide an exciting way to test your physical limits and build impressive strength and control. This article dives into some of the most challenging bodyweight moves, like muscle-ups, planches, and levers, exploring their benefits, progression paths, and the mental discipline required to master them.\n\nThe Muscle-Up: The muscle-up combines the pull-up and dip in one fluid motion, requiring both explosive power and stability. Mastering this move begins with a solid foundation of pull-up and dip strength, as well as grip and shoulder control. Progressions include pull-ups with added weight, negative muscle-ups, and explosive pull-ups to build the strength needed for this advanced skill.\n\nThe Planche: A true test of upper body and core strength, the planche is a move where you hold your body parallel to the ground with your arms extended. Building up to a planche requires significant core strength, shoulder stability, and wrist mobility. Beginners should start with tuck planches and gradually progress to straddle planches and eventually the full planche. This move requires patience and consistent practice, as it places a unique demand on the muscles and joints.\n\nThe Front and Back Lever: These skills, often performed on gymnastics rings or bars, involve holding the body in a horizontal position. Front and back levers engage the lats, core, and lower back, building a balanced, strong physique. To begin training for these moves, try tuck lever holds, gradually extending the legs as you build strength.\n\nHandstand Push-Ups: This variation of the push-up requires balance and shoulder strength. Start by mastering the handstand position against a wall, then work on controlled lowering and eventually full-range push-ups. Handstand push-ups target the shoulders, triceps, and upper chest, offering a great way to build pushing strength.\n\nTraining Tips for Advanced Bodyweight Skills: Proper warm-up and mobility work are essential to avoid injury and improve performance. Work on joint stability, especially in the wrists and shoulders, which are often under strain in advanced calisthenics. Avoid rushing through progressions; focus on form, build strength gradually, and allow adequate rest days to avoid overtraining.\n\nThe Mental Challenge of Calisthenics: Advanced bodyweight techniques require not only physical strength but also mental endurance. These moves can take months or even years to master, teaching patience, perseverance, and body awareness. Documenting your progress, setting achievable goals, and celebrating small milestones can help keep you motivated on your calisthenics journey.\n\nSafety Measures: Safety is paramount with advanced techniques. Always ensure that you’re performing these moves in a controlled environment, with proper surfaces and equipment. Consider working with a coach or partner, especially when attempting high-risk moves for the first time. Consistent warm-ups, stretching, and recovery practices are vital to prevent injury.\n\nConclusion: Advanced bodyweight techniques elevate your calisthenics training to a new level, offering the satisfaction of mastering challenging skills while building strength, balance, and control. Whether for personal achievement or competitive calisthenics, these skills push both your body and mind to their limits, helping you discover the full potential of bodyweight training.',
  img: require('./assets/trainingMuscleUps.jpg')
},
};

const Article = () => {
  const { id } = useGlobalSearchParams();
  const articleId = typeof id === 'string' ? id : ''; 

  const article = articleContent[articleId];

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>
      <Stack.Screen options={{ headerShown: true, title: '' }} />
      {article ? (
        <>
          <ImageBackground
          source={article.img}
          style={styles.image}
          resizeMode="cover"
          >
            <LinearGradient
              colors={['transparent','transparent', '#121212']} 
              style = {styles.gradient}
            />
            <Text style={styles.title}>{article.title}</Text>
          </ImageBackground>

          <Text style={styles.content}>{article.content}</Text>

        </>
      ) : (
        <Text style={styles.notFound}>Article not found</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    flex: 1,  
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
    paddingLeft: 20,
    bottom: 0,
  },
  content: {
    fontSize: 16,
    color: '#b0b0b0',
    marginBottom: 20,
    padding: 20,
  },
  image: {
    width: '100%', 
    height: 240, 
    display: 'flex',
    justifyContent: 'flex-end',

  },
  notFound: {
    fontSize: 16,
    color: '#ff0000',
    textAlign: 'center',
    marginTop: 20,
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default Article;
