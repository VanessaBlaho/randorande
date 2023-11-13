<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('role')->default('user');
            $table->string('username'); // make this required in the sign-up form
            $table->string('password'); // make this required in the sign-up form
            $table->string('email'); // make this required in the sign-up form
            $table->string('first_name'); // make this required in the sign-up form
            $table->string('last_name'); // make this required in the sign-up form
            $table->string('image_path')->nullable(); // this will be added later in profile
            // $table->foreignId('journal_id')->nullable(); // Monica said this was not necessary
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
