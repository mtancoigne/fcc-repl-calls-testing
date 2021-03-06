####### Tests

describe "the hello function" do
  it "says hello" do
    hello.must_equal "Hello!"
  end
end

describe "the greet function" do
  it "says hello to someone" do
    greet("John").must_equal "Hello, John!"
  end

  it "says hello to someone else" do
    greet("Jane").must_equal "Hello, Jane!"
  end
end
