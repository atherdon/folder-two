'use strict';

/**
 * Module dependencies.
 */

const mongoose = require('mongoose');


const Schema = mongoose.Schema;

var options = {
          timestamps: { 
               createdAt: 'created_at',
               updatedAt: 'updated_at' 
          }    
     };

/**
 * Video Schema
 */

var VideoSchema = mongoose.Schema({

     title : String,
     url   : String,
     desc  : String,
     start : Number, //@todo if empty - set 0
     end   : Number, //@todo if empty - set duration end
     step  : Number, //@todo if empty - set 1
     slug  : String,
     // created_at: Date,
     // updated_at: Date     
  }, options );



var Video = mongoose.model('Video', VideoSchema);

module.exports = Video;