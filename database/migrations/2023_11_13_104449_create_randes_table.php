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
        Schema::create('randes', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description');
            $table->string('image_path')->nullable();
            $table->boolean('winter')->nullable();
            $table->boolean('spring')->nullable();
            $table->boolean('summer')->nullable();
            $table->boolean('fall')->nullable();
            $table->boolean('indoors')->nullable();
            $table->foreignId('budget_id')->nullable();
            $table->string('hint_path')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('randes');
    }
};
