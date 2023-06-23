## Product Management (Coding challenge) Project Setup Guide
<hr>
<p>This guide will help you set up and run the product management project using Laravel and Vue.js.</p>
<br>
### Prerequisites
<br>
<p>Make sure you have the following installed on your system:</p>
<ul>
    <li>PHP 7.3 +</li>
    <li>Composer</li>
    <li>Node.js et npm</li>
    <li>Laravel CLI</li>
</ul>
<br>
### Setup configuration
<p>1 . Clone the repository: Clone the Product Management project GitHub repository to your local machine using the following command:</p>
<pre>git clone https://github.com/AidiMohammed/product-management.git</pre>
<p>2 . Install Laravel project dependencies: Navigate to the cloned project directory and run the following command to install Laravel dependencies:</p>
<pre>compoer install</pre>
<p>3 . Install the Vue.js project dependencies: In the same directory, run the following command to install the Vue.js dependencies:</p>
<pre>npm install</pre>
<p>4 . Configure the environment file: Duplicate the <span style="font-weight:800 ;">.env.example</span> file and rename the copy to <span style="font-weight: 800;">.env</span>. Edit this file to configure database information and other settings specific to your environment.</p>
<p>5 . Generate the Laravel Application Key: Run the following command to generate Laravel's unique application key:</p>
<pre>php artisan key:generate</pre>
<p>6 .Run the migrations: Use the following command to run the database migrations and create the necessary tables:</p>
<pre>php artisan migrate</pre>
<p>7 .Run seeders: to pre-populate your database with test data, run the following command:</p>
<pre>php artisan db:seed</pre>
<p>8 .Compile the frontend resources: Use the following command to compile the Vue.js resources and generate the necessary CSS and JavaScript files:</p>
<pre>npm run dev</pre>
<br>
<hr>
### Project execution
<p>Once you have set up the project, you can run it by following these steps:</p>
<br>
<p>1 .Launch the development server: Use the following command to start the Laravel development server:</p>
<pre>php artisan serve</pre>
<p>2 .Access the app: Open your browser and navigate to the URL <span style="font-weight: 800;">http://localhost:8000 </span>to see the product management app in action.</p>