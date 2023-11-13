<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Budget;

class BudgetsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $budgets = [
            [
                'id' => 1,
                'name' => 'free',
            ],
            [
                'id' => 2,
                'name' => 'low budget',
            ],
            [
                'id' => 3,
                'name' => 'medium budget',
            ],
        ];

        foreach ($budgets as $key => $budget) {
            $budget_obj = Budget::find($budget['id']);
            if ($budget_obj === null) {
                $new_budget = new Budget;
            } else {
                $new_budget = $budget_obj;
            }
            $new_budget->id = $budget['id'];
            $new_budget->name = $budget['name'];
            $new_budget->save();
            }
    }
}
