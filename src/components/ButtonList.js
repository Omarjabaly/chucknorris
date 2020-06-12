import React from 'react';
import Button from './Button';



const ButtonList = ({getChuckQuote}) => {

	return (

		<div className = 'pv3 flex justify-center flex-wrap w-100'>

			<Button getTheQuote = {getChuckQuote} subject="animal" />
			<Button getTheQuote = {getChuckQuote} subject = "career" />
			<Button getTheQuote = {getChuckQuote} subject = "celebrity" />
			<Button getTheQuote = {getChuckQuote} subject = "dev" />
			<Button getTheQuote = {getChuckQuote} subject = "explicit" />
			<Button getTheQuote = {getChuckQuote} subject = "fashion" />
			<Button getTheQuote = {getChuckQuote} subject = "food" />
			<Button getTheQuote = {getChuckQuote} subject = "history" />
			<Button getTheQuote = {getChuckQuote} subject = "money" />
			<Button getTheQuote = {getChuckQuote} subject = "movie" />
			<Button getTheQuote = {getChuckQuote} subject = "music" />
			<Button getTheQuote = {getChuckQuote} subject = "political" />
			<Button getTheQuote = {getChuckQuote} subject = "religion" />
			<Button getTheQuote = {getChuckQuote} subject = "science" />
			<Button getTheQuote = {getChuckQuote} subject = "sport" />
			<Button getTheQuote = {getChuckQuote} subject = "travel" />


		</div>

	);

}




export default ButtonList;
