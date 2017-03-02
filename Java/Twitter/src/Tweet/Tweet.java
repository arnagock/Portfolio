package Tweet;

public class Tweet {
	String id = java.util.UUID.randomUUID().toString();
	String text;

	public Tweet(String text) {
		this.text = text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public String getId() {
		return id;
	}

	public String getText() {
		return this.text;
	}

}
