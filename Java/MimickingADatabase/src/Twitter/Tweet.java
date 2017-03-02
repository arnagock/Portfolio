package Twitter;

public class Tweet {
	private final String id = java.util.UUID.randomUUID().toString();
	private final String text;

	public Tweet(String text) {
		this.text = text;
	}

	public String getId() {
		return id;
	}

	public String getText() {
		return this.text;
	}

	@Override
	public String toString() {
		return "Tweet [id=" + this.id + ", timestamp=" + ", text=" + this.text + "]";
	}

}
