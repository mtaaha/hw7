/*
   Name: Mohammad Taaha
   91.61 Assignment:  Using the jQuery Validation Plugin with Your Dynamic Table
   Mohammad Taaha, UMass Lowell Computer Science Student,mohammad_taaha@student.uml.edu
   Copyright (c) 2018 by Mohammad Taaha.  All rights reserved.  May be
freely copied or excerpted for educational purposes with credit to the
author.
   Created on 11/25/2018
	 Description:This webpage will take an input from the user background
   and create a dynamic multiplication table. If the user tries to enter anything besides
	 a number, there will be an error message thrown that will direct the user to enter the correct password.
*/
$(function() {

  $("#register-form").validate({
    rules: {
      fh_axis: {
        required: true,
        number: true,
      },

      sh_axis: {
        required: true,
        number: true,
      },
      fv_axis: {
        required: true,
        number: true,
      },
      sv_axis: {
        required: true,
        number: true,
      },

    },
    messages: {
      fh_axis: {
        required: 'Please enter an axis.',
        number: 'Please enter a <em>valid</em> number.',
      },
      sh_axis: {
        required: 'Please enter an axis.',
        number: 'Please enter a <em>valid</em> number.',
      },
      fv_axis: {
        required: 'Please enter an axis.',
        number: 'Please enter a <em>valid</em> number.',
      },
      sv_axis: {
        required: 'Please enter an axis.',
        number: 'Please enter a <em>valid</em> number.',
      }
    }
  });

});
