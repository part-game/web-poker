package ar.com.tandilweb.exchange.backwardValidation;

import ar.com.tandilweb.exchange.BackwardValidationSchema;

public class ChallengeValidation extends BackwardValidationSchema {
	
	public long idChallenge;
	public String transactionID;
	
	public ChallengeValidation() {
		super("challengeValidation");
	}

}
