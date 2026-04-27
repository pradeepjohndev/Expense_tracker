const User = require('../Model/Users');
const Expense = require('../Model/Expense');
const xlsx = require('xlsx')

// console.log("Model name:", Income.modelName);
exports.addExpense = async (req, res) => {
    const userId = req.user._id;
    try {
        const { icon, category, amount, date } = req.body;

        if (!category || !amount || !date) {
            return res.status(400).json({ message: "all income fileds are required" })
        }

        const newExpense = new Expense({
            userId,
            icon,
            category,
            amount,
            date: new Date(date)
        });
        await newExpense.save();
        res.status(200).json({ result: newExpense, message: "created succesfully" })
    }

    catch (err) {
        return res.status(400).json({ message: `error has occured while adding Expense ${err.message}` })
    }
}

exports.getallExpense = async (req, res) => {
    const userId = req.user._id;
    try {
        const expense = await Expense.find({ userId }).sort({ date: -1 });
        res.json(expense);
    }
    catch (err) {
        return res.status(500).json({ message: `error has occured while getting all Expense ${err.message}` })
    }
};

exports.deleteExpense = async (req, res) => {
    try {
        await Expense.findByIdAndDelete(req.params.id);
        res.json({ message: "Expense deleted" })
    }
    catch (err) {
        return res.status(500).json({ message: `error has occured while deleting Expense ${err.message}` })
    }
};


exports.downloadExpense = async (req, res) => {
    const userId = req.user.id;
    try {
        const expense = await Expense.find({ userId }).sort({ date: -1 });

        const data = expense.map((item) => ({
            category: item.category,
            Amount: item.amount,
            Date: item.date,
        }));

        const wb = xlsx.utils.book_new();
        const ws = xlsx.utils.json_to_sheet(data);
        xlsx.utils.book_append_sheet(wb, ws, "Expense");
        xlsx.writeFile(wb, 'Expense_details.xlsx');
        res.download('Expense_details.xlsx');

    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};
