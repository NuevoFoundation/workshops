package org.nuevofoundation.tic_tac_toe

import android.graphics.Color
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Button
import android.widget.Toast
import org.nuevofoundation.tic_tac_toe.databinding.ActivityMainBinding
import java.util.*

class MainActivity : AppCompatActivity() {
    private lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        binding = ActivityMainBinding.inflate(layoutInflater)
        val view = binding.root
        setContentView(view)

        // PUZZLE 2

    }

    var player1 = ArrayList<Int>()
    var player2 = ArrayList<Int>()
    var activePlayer = 1
    var setPlayer = 1
    var colorBlue = Color.rgb(0, 161, 241)
    // PUZZLE 3a
    var colorGreen = Color.BLACK

    fun restartGame(view:View)
    {
        println("Restarting the Tac-Tic-Toe Game!")
        binding.topLeftBtn.setBackgroundResource(android.R.drawable.btn_default)
        binding.topCenterBtn.setBackgroundResource(android.R.drawable.btn_default)
        binding.topRightBtn.setBackgroundResource(android.R.drawable.btn_default)
        binding.centerLeftBtn.setBackgroundResource(android.R.drawable.btn_default)
        binding.centerBtn.setBackgroundResource(android.R.drawable.btn_default)
        binding.centerRightBtn.setBackgroundResource(android.R.drawable.btn_default)
        binding.bottomLeftBtn.setBackgroundResource(android.R.drawable.btn_default)
        binding.bottomCenterBtn.setBackgroundResource(android.R.drawable.btn_default)
        binding.bottomRightBtn.setBackgroundResource(android.R.drawable.btn_default)

        binding.topLeftBtn.text = ""
        binding.topCenterBtn.text = ""
        binding.topRightBtn.text = ""
        binding.centerLeftBtn.text = ""
        binding.centerBtn.text = ""
        binding.centerRightBtn.text = ""
        binding.bottomLeftBtn.text = ""
        binding.bottomCenterBtn.text = ""
        binding.bottomRightBtn.text = ""

        player1.clear()
        player2.clear()
        activePlayer = 1

        binding.topLeftBtn.isEnabled = true
        binding.topCenterBtn.isEnabled = true
        binding.topRightBtn.isEnabled = true
        binding.centerLeftBtn.isEnabled = true
        binding.centerBtn.isEnabled = true
        binding.centerRightBtn.isEnabled = true
        binding.bottomLeftBtn.isEnabled = true
        binding.bottomCenterBtn.isEnabled = true
        binding.bottomRightBtn.isEnabled = true

        setPlayer = 1
        binding.PVP.setBackgroundColor(colorBlue)
        binding.PVC.setBackgroundColor(android.R.drawable.btn_default)

    }

    fun buttonClick(view: View)
    {
        val buSelected:Button = view as Button
        var cellId = 0
        when(buSelected.id)
        {
            R.id.topLeftBtn -> cellId = 1
            R.id.topCenterBtn -> cellId = 2
            R.id.topRightBtn -> cellId = 3

            R.id.centerLeftBtn -> cellId = 4
            R.id.centerBtn -> cellId = 5
            R.id.centerRightBtn -> cellId = 6

            R.id.bottomLeftBtn -> cellId = 7
            R.id.bottomCenterBtn -> cellId = 8
            R.id.bottomRightBtn -> cellId = 9
        }
        playGame(cellId,buSelected)

    }

    fun playerChoose(view:View)
    {
        val ps:Button = view as Button
        when(ps.id)
        {
            R.id.PVP -> {
                setPlayer = 1
                ps.setBackgroundColor(colorBlue)
                binding.PVC.setBackgroundColor(android.R.drawable.btn_default)
            }
            R.id.PVC -> {
                setPlayer = 2
                ps.setBackgroundColor(colorBlue)
                binding.PVP.setBackgroundColor(android.R.drawable.btn_default)
            }
        }
    }


    private fun playGame(cellId:Int, buSelected:Button)
    {
        if (activePlayer == 1)
        {
            buSelected.text = "X"
            buSelected.setBackgroundColor(colorGreen)
            player1.add(cellId)
            activePlayer = 2
            if (setPlayer == 1)
            {}
            else
            {
                try {
                    autoPlay()
                }catch (ex:Exception)
                {
                    Toast.makeText(this,"Game Over",Toast.LENGTH_SHORT).show()
                }

            }
        }
        else
        {
            buSelected.text = "O"
            buSelected.setBackgroundColor(colorBlue)
            player2.add(cellId)
            activePlayer = 1
        }
        buSelected.isEnabled = false
        checkWinner()
    }

    private fun checkWinner()
    {
        // PUZZLE 3b
        var winner = 2

        //row1
        if (player1.contains(1) && player1.contains(2) && player1.contains(3))
        {
            winner = 1
        }
        if (player2.contains(1) && player2.contains(2) && player2.contains(3))
        {
            winner = 2
        }

        //row2
        if (player1.contains(4) && player1.contains(5) && player1.contains(6))
        {
            winner = 1
        }
        if (player2.contains(4) && player2.contains(5) && player2.contains(6))
        {
            winner = 2
        }

        //row3
        if (player1.contains(7) && player1.contains(8) && player1.contains(9))
        {
            winner = 1
        }
        if (player2.contains(7) && player2.contains(8) && player2.contains(9))
        {
            winner = 2
        }

        //col1
        if (player1.contains(1) && player1.contains(4) && player1.contains(7))
        {
            winner = 1
        }
        if (player2.contains(1) && player2.contains(4) && player2.contains(7))
        {
            winner = 2
        }

        //col2
        if (player1.contains(2) && player1.contains(5) && player1.contains(8))
        {
            winner = 1
        }
        if (player2.contains(2) && player2.contains(5) && player2.contains(8))
        {
            winner = 2
        }

        //col3
        if (player1.contains(3) && player1.contains(6) && player1.contains(9))
        {
            winner = 1
        }
        if (player2.contains(3) && player2.contains(6) && player2.contains(9))
        {
            winner = 2
        }

        // FINAL PUZZLE
        

        if (winner != -1)
        {
            if (winner == 1)
            {
                if(setPlayer == 1) {
                    Toast.makeText(this, "Player 1 Wins!!", Toast.LENGTH_SHORT).show()
                    stopTouch()
                }
                else
                {
                    Toast.makeText(this, "You Won!!", Toast.LENGTH_SHORT).show()
                    stopTouch()
                }
            }
            else
            {
                if (setPlayer == 1) {
                    Toast.makeText(this, "Player 2 Wins!!", Toast.LENGTH_SHORT).show()
                    stopTouch()
                }
                else
                {
                    Toast.makeText(this, "CPU Wins!!", Toast.LENGTH_SHORT).show()
                    stopTouch()
                }
            }
        }
    }

    private fun stopTouch()
    {
        binding.topLeftBtn.isEnabled = false
        binding.topCenterBtn.isEnabled = false
        binding.topRightBtn.isEnabled = false
        binding.centerLeftBtn.isEnabled = false
        binding.centerBtn.isEnabled = false
        binding.centerRightBtn.isEnabled = false
        binding.bottomLeftBtn.isEnabled = false
        binding.bottomCenterBtn.isEnabled = false
        binding.bottomRightBtn.isEnabled = false
    }

    private fun autoPlay()
    {
        val emptyCells = ArrayList<Int>()
        for (cellId in 1..9) {
            if (player1.contains(cellId) || player2.contains(cellId))
            {}
            else
            {
                emptyCells.add(cellId)
            }
        }

        val r = Random()
        val randomIndex = r.nextInt(emptyCells.size-0)+0
        val cellId = emptyCells[randomIndex]

        val buSelect:Button?
        buSelect = when(cellId) {
            1 -> binding.topLeftBtn
            2 -> binding.topCenterBtn
            3 -> binding.topRightBtn
            4 -> binding.centerLeftBtn
            5 -> binding.centerBtn
            6 -> binding.centerRightBtn
            7 -> binding.bottomLeftBtn
            8 -> binding.bottomCenterBtn
            9 -> binding.bottomRightBtn
            else -> binding.topLeftBtn
        }

        playGame(cellId,buSelect)
    }
}
