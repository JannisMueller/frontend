<template>
  <div class="learn">
    <h2>Learn Basic Terms of Java</h2>
    <figure></figure>
    <p>Here, let's learn the basic and important terms!</p>
    <div id="text">
      <div class="learn">
        <p>
          Index:<br>
          <br>
          <a href="#p1">1. Class-Based</a><br>
          <a href="#p2">2. Object-Oriented</a><br>
          <a href="#p3">3. Java Development Kit</a><br>
          <a href="#p4">4. Java Virtual Machine</a><br>
          <a href="#p5">5. Syntax of Java</a><br>
        </p>
      </div>
      <h3 id="p1">1. Class-Based</h3>
      <p>
        Class-based programming, or more commonly class-orientation, is a style of object-oriented programming (OOP)
        in which inheritance occurs via defining classes of objects, instead of inheritance occurring via the objects alone (compare prototype-based programming).
      </p>
      <h3 id="p2">2. Object-Oriented</h3>
      <p>
        Object-oriented programming (OOP) is a programming paradigm based on the concept of "objects",
        which can contain data and code: data in the form of fields (often known as attributes or properties),
        and code, in the form of procedures (often known as methods).
      </p>
      <h3 id="p3">3. Java Development Kit</h3>
      <p>
        The Java Development Kit (JDK) is an implementation of either one of the Java Platform, Standard Edition, Java Platform, Enterprise Edition,
        or Java Platform, Micro Edition platforms released by Oracle Corporation in the form of a binary product aimed at Java developers on Solaris, Linux, macOS or Windows.
        The JDK includes a private JVM and a few other resources to finish the development of a Java application.
      </p>
      <h3 id="p4">4. Java Virtual Machine</h3>
      <p>
        The Java Virtual Machine (JVM) is detailed by a specification that formally describes what is required in a JVM implementation.
        Having a specification ensures interoperability of Java programs across different implementations so that
        program authors using the Java Development Kit (JDK) need not worry about idiosyncrasies of the underlying hardware platform.
      </p>
      <h3 id="p5">5. Syntax of Java</h3>
      <p>
        The syntax of Java refers to the set of rules defining how a Java program is written and interpreted.
        The syntax is mostly derived from C and C++. Unlike in C++, in Java there are no global functions or variables,
        but there are data members which are also regarded as global variables. All code belongs to classes and all values are objects.
      </p>
      <div class="learn">
        <iframe width="100%"
                height="auto"
                src="https://www.youtube.com/embed/RRubcjpTkks"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe><br><br>
        <p id="center">
          * * * * *<br>
          Have you got the idea what Java is roughly?<br>
          Would you like to try taking <router-link to="/quiz">Quiz</router-link> now?<br>
          Or if you's like to know more about it, see the <router-link to="/references">References</router-link>.<br>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Learn'
}
</script>

<style scoped>

.learn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#text {
  max-width: 700px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 50px;
}
#center {
  text-align: center;
}
h2 {
  margin-top: 30px;
  margin-bottom: 30px;
  color: var(--color-text-primary);
}
h3 {
  color: var(--color-text-secondary);
  font-weight: bold;
  font-size: 20px;
  margin-top: 30px;
}
p {
  color: var(--color-text-secondary);
  margin-top: 20px;
  margin-bottom: 20px;
}
a {
  text-decoration: none;
  font-weight: bold;
  color: var(--color-bg-button);
}
figure {
  width: 250px;
  height: 250px;
  background-image: url("../assets/learn-illustration.jpg");
  background-size: cover;
}

</style>